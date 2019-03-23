//-----------------------------------------------------------------------
// <copyright file="IUserRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Interfaces.Repositories
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Domains;
    using Dto.Customers;
    using Dto.Users;

    /// <summary>
    /// Interface that implements User repository
    /// </summary>
    public interface IUserRepository
    {
        Task<List<User>> GetUsers();

        Task<User> CreateAdmin(string username, string password);

        Task<User> CreateCustomer(CustomerRegisterDto customerDto);

        Task<User> ValidateUser(RegisterUserDto userDto);

        Task<User> GetUserById(int id);

    }
}
