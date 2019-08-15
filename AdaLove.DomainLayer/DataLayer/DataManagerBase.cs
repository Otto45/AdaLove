using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using AdaLove.DomainLayer.ServiceLocator;

namespace AdaLove.DomainLayer.DataLayer
{
    internal delegate SqlCommand CommandFactory<in TCommandParameters>(SqlConnection sqlConnection, TCommandParameters commandParameters);
    internal delegate SqlCommand CommandFactory<in TCommandParameter1, in TCommandParameter2>(SqlConnection sqlConnection, TCommandParameter1 commandParameter1, TCommandParameter2 commandParameter2);
    internal delegate SqlCommand CommandFactoryWithSpName<in TCommandParameters>(SqlConnection sqlConnection, string storedProcedureName, TCommandParameters commandParameters);
    internal delegate SqlCommand CommandFactoryForSingleParameter<in TCommandParameterValue>(SqlConnection sqlConnection, string storedProcedureName, DbType parameterType, string parameterName, TCommandParameterValue commandParameterValue, int parameterSize = 0);

    internal delegate TResult ModelAdapterForSingle<out TResult>(IDataRecord dataRecord);
    internal delegate TResult ModelAdapterForMultipleResultSets<out TResult>(IDataReader dataReader);
    internal delegate IEnumerable<TResult> ModelAdapterForSequence<out TResult>(DbDataReader dbDataReader);

    internal class DataManagerBase
    {
        private const string ConnectionStringName = "AdaLoveDb";

        protected DataManagerBase()
        {
        }

        private static void ExecuteNonQueryUsingTransaction(SqlConnection sqlConnection, SqlCommand sqlCommand)
        {
            sqlConnection.Open();
            SqlTransaction transaction = null;
            try
            {
                transaction = sqlConnection.BeginTransaction();
                sqlCommand.Transaction = transaction;
                sqlCommand.ExecuteNonQuery();
                transaction.Commit();
            }
            catch
            {
                transaction?.Rollback();
                throw;
            }
            finally
            {
                sqlCommand?.Dispose();
                transaction?.Dispose();
                sqlConnection.Close();
            }
        }

        protected static SqlConnection GetDbConnection(ServiceLocatorBase serviceLocator)
        {
            return serviceLocator.CreateDbConnection(ConnectionStringName);
        }

        protected static void ExecuteNonQueryUsingTransaction<TCommandParameters>(SqlConnection sqlConnection, CommandFactory<TCommandParameters> commandFactory, TCommandParameters commandParameters)
        {
            ExecuteNonQueryUsingTransaction(sqlConnection, commandFactory(sqlConnection, commandParameters));
        }

        protected static void ExecuteNonQueryUsingTransaction<TCommandParameter1, TCommandParameter2>(SqlConnection sqlConnection, CommandFactory<TCommandParameter1, TCommandParameter2> commandFactory, TCommandParameter1 commandParameter1, TCommandParameter2 commandParameter2)
        {
            ExecuteNonQueryUsingTransaction(sqlConnection, commandFactory(sqlConnection, commandParameter1, commandParameter2));
        }

        protected static TResult ExecuteNonQueryUsingTransactionAndReturnValue<TCommandParameter1, TCommandParameter2, TResult>(SqlConnection sqlConnection, CommandFactory<TCommandParameter1, TCommandParameter2> commandFactory, TCommandParameter1 commandParameter1, TCommandParameter2 commandParameter2)
        {
            sqlConnection.Open();
            SqlCommand sqlCommand = null;
            SqlTransaction transaction = null;
            try
            {
                sqlCommand = commandFactory(sqlConnection, commandParameter1, commandParameter2);
                transaction = sqlConnection.BeginTransaction();
                sqlCommand.Transaction = transaction;

                sqlCommand.ExecuteNonQuery();
                TResult result = (TResult)sqlCommand.Parameters[0].Value;

                transaction.Commit();
                return result;
            }
            catch
            {
                transaction?.Rollback();
                throw;
            }
            finally
            {
                sqlCommand?.Dispose();
                transaction?.Dispose();
                sqlConnection.Close();
            }
        }

        protected static TResult ExecuteNonQueryUsingTransactionAndReturnValue<TCommandParameters, TResult>(SqlConnection sqlConnection, CommandFactory<TCommandParameters> commandFactory, TCommandParameters commandParameters)
        {
            sqlConnection.Open();
            SqlCommand sqlCommand = null;
            SqlTransaction transaction = null;
            try
            {
                sqlCommand = commandFactory(sqlConnection, commandParameters);
                transaction = sqlConnection.BeginTransaction();
                sqlCommand.Transaction = transaction;

                sqlCommand.ExecuteNonQuery();
                TResult result = (TResult)sqlCommand.Parameters[0].Value;

                transaction.Commit();
                return result;
            }
            catch
            {
                transaction?.Rollback();
                throw;
            }
            finally
            {
                sqlCommand?.Dispose();
                transaction?.Dispose();
                sqlConnection.Close();
            }
        }

        protected static TResult ExecuteReaderUsingTransactionAndAdaptToModelWithPossibleNull<TCommandParameters, TResult>(SqlConnection sqlConnection, CommandFactory<TCommandParameters> commandFactory, TCommandParameters commandParameters, ModelAdapterForSingle<TResult> modelAdapter)
        {
            sqlConnection.Open();
            SqlTransaction transaction = null;
            SqlCommand sqlCommand = null;
            SqlDataReader sqlDataReader = null;
            try
            {
                transaction = sqlConnection.BeginTransaction();
                sqlCommand = commandFactory(sqlConnection, commandParameters);
                sqlCommand.Transaction = transaction;

                sqlDataReader = sqlCommand.ExecuteReader();
                TResult result = sqlDataReader.Read() ? modelAdapter(sqlDataReader) : default(TResult);

                sqlDataReader.Close();
                transaction.Commit();
                return result;
            }
            catch
            {
                transaction?.Rollback();
                throw;
            }
            finally
            {
                sqlDataReader?.Dispose();
                sqlCommand?.Dispose();
                transaction?.Dispose();
                sqlConnection.Close();
            }
        }

        protected static TResult ExecuteReaderUsingTransactionAndAdaptToModel<TCommandParameters, TResult>(SqlConnection sqlConnection, CommandFactory<TCommandParameters> commandFactory, TCommandParameters commandParameters, ModelAdapterForSingle<TResult> modelAdapter)
        {
            sqlConnection.Open();
            SqlTransaction transaction = null;
            SqlCommand sqlCommand = null;
            SqlDataReader sqlataReader = null;
            try
            {
                transaction = sqlConnection.BeginTransaction();
                sqlCommand = commandFactory(sqlConnection, commandParameters);
                sqlCommand.Transaction = transaction;

                sqlataReader = sqlCommand.ExecuteReader();
                sqlataReader.Read();
                TResult result = modelAdapter(sqlataReader);

                sqlataReader.Close();
                transaction.Commit();
                return result;
            }
            catch
            {
                transaction?.Rollback();
                throw;
            }
            finally
            {
                sqlataReader?.Dispose();
                sqlCommand?.Dispose();
                transaction?.Dispose();
                sqlConnection.Close();
            }
        }

        protected static TResult ExecuteReaderAndAdaptToModelWithPossibleNull<TCommandParameters, TResult>(SqlConnection sqlConnection, CommandFactory<TCommandParameters> commandFactory, TCommandParameters commandParameters, ModelAdapterForSingle<TResult> modelAdapter)
        {
            sqlConnection.Open();
            SqlCommand sqlCommand = null;
            SqlDataReader sqlDataReader = null;
            try
            {
                sqlCommand = commandFactory(sqlConnection, commandParameters);
                sqlDataReader = sqlCommand.ExecuteReader();
                return sqlDataReader.Read() ? modelAdapter(sqlDataReader) : default(TResult);
            }
            finally
            {
                sqlDataReader?.Dispose();
                sqlCommand?.Dispose();
                sqlConnection.Close();
            }
        }

        protected static TResult ExecuteReaderAndAdaptToModelWithPossibleNull<TCommandParameter1, TCommandParameter2, TResult>(SqlConnection sqlConnection, CommandFactory<TCommandParameter1, TCommandParameter2> commandFactory, TCommandParameter1 commandParameter1, TCommandParameter2 commandParameter2, ModelAdapterForSingle<TResult> modelAdapter)
        {
            sqlConnection.Open();
            SqlCommand sqlCommand = null;
            SqlDataReader sqlDataReader = null;
            try
            {
                sqlCommand = commandFactory(sqlConnection, commandParameter1, commandParameter2);
                sqlDataReader = sqlCommand.ExecuteReader();
                return sqlDataReader.Read() ? modelAdapter(sqlDataReader) : default(TResult);
            }
            finally
            {
                sqlDataReader?.Dispose();
                sqlCommand?.Dispose();
                sqlConnection.Close();
            }
        }

        protected static TResult ExecuteReaderAndAdaptToModelWithPossibleNull<TCommandParameter1, TCommandParameter2, TResult>(SqlConnection sqlConnection, CommandFactory<TCommandParameter1, TCommandParameter2> commandFactory, TCommandParameter1 commandParameter1, TCommandParameter2 commandParameter2, ModelAdapterForMultipleResultSets<TResult> modelAdapter)
        {
            sqlConnection.Open();
            SqlCommand sqlCommand = null;
            SqlDataReader sqlDataReader = null;
            try
            {
                sqlCommand = commandFactory(sqlConnection, commandParameter1, commandParameter2);
                sqlDataReader = sqlCommand.ExecuteReader();
                return sqlDataReader.Read() ? modelAdapter(sqlDataReader) : default(TResult);
            }
            finally
            {
                sqlDataReader?.Dispose();
                sqlCommand?.Dispose();
                sqlConnection.Close();
            }
        }

        protected static IEnumerable<TResult> ExecuteReaderForSequenceAndAdaptToModelWithPossibleEmpty<TCommandParameters, TResult>(SqlConnection sqlConnection, CommandFactory<TCommandParameters> commandFactory, TCommandParameters commandParameters, ModelAdapterForSequence<TResult> modelAdapter)
        {
            sqlConnection.Open();
            SqlCommand sqlCommand = null;
            SqlDataReader sqlDataReader = null;
            try
            {
                sqlCommand = commandFactory(sqlConnection, commandParameters);
                sqlDataReader = sqlCommand.ExecuteReader();
                return sqlDataReader.HasRows ? modelAdapter(sqlDataReader) : Enumerable.Empty<TResult>();
            }
            finally
            {
                sqlDataReader?.Dispose();
                sqlCommand?.Dispose();
                sqlConnection.Close();
            }
        }
    }
}
