using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserApi.Contexts;

namespace UserApi.Mocking
{
    public class MockUserContextService : IUserContextService
    {

        public MockUserContextService()
        {
            UserContext = new UserContext();
        }

        public UserContext UserContext { get; }
    }
}
