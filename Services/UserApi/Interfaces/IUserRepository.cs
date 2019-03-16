//-----------------------------------------------------------------------
// <copyright file="IUserRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using UserApi.Dto;

namespace UserApi.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Domains;

    /// <summary>
    /// Interface that implements User repository
    /// </summary>
    public interface IUserRepository
    {
        Task<List<User>> GetUsers();

        Task<User> CreateAdmin(string username, string password);

        Task<User> CreateCustomer(User user);

        Task<User> Authenticate(RegisterUserDto userDto);
    }
}
