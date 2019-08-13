using AdaLove.DomainLayer.DataLayer;
using AdaLove.DomainLayer.Managers;

namespace AdaLove.DomainLayer.ServiceLocator
{
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

        protected abstract DataFacade CreateDataFacadeCore();

        protected abstract StudentManager CreateStudentManagerCore();
    }
}
