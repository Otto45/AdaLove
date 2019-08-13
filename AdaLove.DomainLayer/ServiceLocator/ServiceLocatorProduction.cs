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
    }
}
