using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserApi.Contexts;

namespace UserApi.Mocking
{
    public class UserContextService : IUserContextService
    {
        public UserContextService(UserContext userContext)
        {
            UserContext = userContext;
        }

        public UserContext UserContext { get; }
    }
}
