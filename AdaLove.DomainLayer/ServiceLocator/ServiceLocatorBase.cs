using System.Data.SqlClient;
using System.Diagnostics.CodeAnalysis;
using AdaLove.DomainLayer.DataLayer;
using AdaLove.DomainLayer.Managers;

namespace AdaLove.DomainLayer.ServiceLocator
{
    [ExcludeFromCodeCoverage]
    internal abstract class ServiceLocatorBase
    {
        public DataFacade CreateDataFacade()
        {
            return CreateDataFacadeCore();
        }

        public StudentManager CreateStudentManager()
        {
            return CreateStudentManagerCore();
        }

        public StudentDataManagerBase CreateStudentDataManager()
        {
            return CreateStudentDataManagerCore();
        }

        public SqlConnection CreateDbConnection(string connectionStringName)
        {
            return CreateDbConnectionCore(connectionStringName);
        }

        protected abstract DataFacade CreateDataFacadeCore();

        protected abstract StudentManager CreateStudentManagerCore();

        protected abstract StudentDataManagerBase CreateStudentDataManagerCore();

        protected abstract SqlConnection CreateDbConnectionCore(string connectionStringName);
    }
}
