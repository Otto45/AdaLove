using System.Data.SqlClient;
using AdaLove.DomainLayer.DataLayer;
using AdaLove.DomainLayer.Managers;

namespace AdaLove.DomainLayer.ServiceLocator
{
    internal sealed class ServiceLocatorProduction : ServiceLocatorBase
    {
        protected override DataFacade CreateDataFacadeCore()
        {
            return new DataFacade(this);
        }

        protected override StudentManager CreateStudentManagerCore()
        {
            return new StudentManager();
        }

        protected override StudentDataManagerBase CreateStudentDataManagerCore()
        {
            return new StudentDataManager(this);
        }

        protected override SqlConnection CreateDbConnectionCore(string connectionStringName)
        {
            throw new System.NotImplementedException();
        }
    }
}
