//-----------------------------------------------------------------------
// <copyright file="IUserController.cs" website="Patrikduch.com">
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
    /// Interface description for User REST API Controller
    /// </summary>
    public interface IUserController
    {
        Task<List<User>> GetAllUsers();

        Task<User> CreateAdmin(RegisterUserDto userDto);
        Task<User> Authenticate(RegisterUserDto userDto);
        Task<User> CreateCustomer(User user);
    }
}
