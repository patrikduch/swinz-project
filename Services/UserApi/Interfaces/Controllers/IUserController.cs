//-----------------------------------------------------------------------
// <copyright file="IUserController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------


using UserApi.Dto.Token;
using UserApi.Dto.Users;

namespace UserApi.Interfaces
{
    using Microsoft.AspNetCore.Mvc;
    using Dto;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Domains;
    using Dto.Customers;

    /// <summary>
    /// Interface description for User REST API Controller
    /// </summary>
    public interface IUserController
    {
        Task<List<User>> GetAllUsers();
        Task<ActionResult> Authenticate(RegisterUserDto userDto);
        Task<IActionResult> IsAuthenticated(UserTokenDto token);
    }
}
