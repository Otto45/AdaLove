using System.Data.SqlClient;
using AdaLove.DomainLayer.ServiceLocator;

namespace AdaLove.DomainLayer.DataLayer
{
    internal sealed class StudentDataManager : StudentDataManagerBase
    {
        private readonly SqlConnection _sqlConnection;

        public StudentDataManager(ServiceLocatorBase serviceLocator)
        {
            _sqlConnection = GetDbConnection(serviceLocator);
        }
    }
}
