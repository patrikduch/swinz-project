//-----------------------------------------------------------------------
// <copyright file="IUserHelperService.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using PersistenceLib.Domains;
using PersistenceLib.Domains.UserApi;

namespace UserApi.Interfaces.Helpers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Dto.Customers;
    using Dto.Users;

    /// <summary>
    /// User helper service interface
    /// </summary>
    public interface IUserHelperService
    {
        Task<User> PrepareUser(UserDto dto, string roleName);
        IEnumerable<CustomerUserDto> CustomerEntityToDto(IEnumerable<Customer> customers);
    }
}
