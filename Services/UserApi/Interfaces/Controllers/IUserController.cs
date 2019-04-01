//-----------------------------------------------------------------------
// <copyright file="IUserController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Interfaces.Controllers
{
    using Dto.Token;
    using Dto.Users;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using PersistenceLib.Domains.UserApi;

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
