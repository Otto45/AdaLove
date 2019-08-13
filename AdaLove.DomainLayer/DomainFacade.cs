using System.Diagnostics.CodeAnalysis;
using AdaLove.DomainLayer.Managers;
using AdaLove.DomainLayer.ServiceLocator;

namespace AdaLove.DomainLayer
{
    public sealed partial class DomainFacade
    {
        private readonly ServiceLocatorBase _serviceLocator;

        private StudentManager _studentManager;
        private StudentManager StudentManager => _studentManager ?? (_studentManager = _serviceLocator.CreateStudentManager());

        [ExcludeFromCodeCoverage]
        public DomainFacade() : this(new ServiceLocatorProduction()) { }

        internal DomainFacade(ServiceLocatorBase serviceLocator)
        {
            _serviceLocator = serviceLocator;
        }
    }
}
