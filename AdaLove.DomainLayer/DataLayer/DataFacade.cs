using AdaLove.DomainLayer.ServiceLocator;

namespace AdaLove.DomainLayer.DataLayer
{
    internal sealed class DataFacade
    {
        private readonly ServiceLocatorBase _serviceLocator;

        private StudentDataManagerBase _studentDataManagerBase;
        private StudentDataManagerBase StudentDataManagerBase => _studentDataManagerBase ?? (_studentDataManagerBase = _serviceLocator.CreateStudentDataManager());

        public DataFacade(ServiceLocatorBase serviceLocator)
        {
            _serviceLocator = serviceLocator;
        }
    }
}
