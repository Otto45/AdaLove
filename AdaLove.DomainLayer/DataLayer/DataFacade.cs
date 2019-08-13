using AdaLove.DomainLayer.ServiceLocator;

namespace AdaLove.DomainLayer.DataLayer
{
    internal sealed class DataFacade
    {
        private readonly ServiceLocatorBase _serviceLocator;

        public DataFacade(ServiceLocatorBase serviceLocator)
        {
            _serviceLocator = serviceLocator;
        }
    }
}
