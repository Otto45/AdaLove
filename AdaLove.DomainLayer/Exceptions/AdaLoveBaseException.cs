using System;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.Serialization;

namespace AdaLove.DomainLayer.Exceptions
{
    [Serializable]
    [ExcludeFromCodeCoverage]
    public class AdaLoveBaseException : Exception
    {
        //
        // For guidelines regarding the creation of new exception types, see
        //    http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpgenref/html/cpconerrorraisinghandlingguidelines.asp
        // and
        //    http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dncscol/html/csharp07192001.asp
        //

        public AdaLoveBaseException()
        {
        }

        public AdaLoveBaseException(string message) : base(message)
        {
        }

        public AdaLoveBaseException(string message, Exception inner) : base(message, inner)
        {
        }

        protected AdaLoveBaseException(
            SerializationInfo info,
            StreamingContext context) : base(info, context)
        {
        }
    }
}
