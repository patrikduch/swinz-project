using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersistenceLib.Domains;
using PersistenceLib.Domains.UserApi;
using UserApi.Dto.Customers;
using UserApi.Dto.Users;
using UserApi.Interfaces.Helpers;

namespace UserApi.Mocking
{
    public class MockUserHelperService : IUserHelperService
    {
        public IEnumerable<CustomerUserDto> CustomerEntityToDto(IEnumerable<Customer> customers)
        {
            return null;
        }

        public Task<User> PrepareUser(UserDto dto, string roleName)
        {
            return null;
        }
    }
}
