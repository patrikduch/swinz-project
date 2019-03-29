namespace UserApi.Interfaces.Helpers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Domains;
    using Dto.Customers;
    using Dto.Users;

    public interface IUserHelperService
    {
        Task<User> PrepareUser(UserDto dto, string roleName);
 
        IEnumerable<CustomerUserDto> CustomerEntityToDto(IEnumerable<Customer> customers);
    }
}
