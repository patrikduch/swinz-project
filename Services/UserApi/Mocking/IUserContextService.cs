using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserApi.Contexts;

namespace UserApi.Mocking
{
    public interface IUserContextService
    {
        UserContext UserContext { get;}

    }
}
