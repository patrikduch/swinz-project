using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserApi.Domains;
using UserApi.Dto.Customers;
using UserApi.Dto.Users;

namespace UserApi.Interfaces.Helpers
{
    public interface IUserHelperService
    {
        Task<User> PrepareUser(UserDto dto, string roleName);
 
        IEnumerable<CustomerUserDto> CustomerEntityToDto(IEnumerable<Customer> customers);
    }
}
