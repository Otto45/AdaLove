using System;
using System.Data;

namespace AdaLove.DomainLayer.DataLayer.Adapters
{
    internal static class DataReaderToModelAdapter
    {
        private static T GetColumnValueFromDataRecord<T>(IDataRecord dataRecord, string columnName)
        {
            var columnValue = dataRecord[columnName];

            if (columnValue == DBNull.Value)
                return default(T);

            if (typeof(T) == typeof(string))
            {
                columnValue = ((string)columnValue).Trim();
                if (((string)columnValue).Length == 0)
                    return default(T);
            }

            return (T)columnValue;
        }
    }
}
