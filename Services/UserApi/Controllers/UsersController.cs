//-----------------------------------------------------------------------
// <copyright file="UsersController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Controllers
{
    using Dto.Token;
    using Dto.Users;
    using Helpers;
    using Interfaces;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Options;
    using Microsoft.IdentityModel.Tokens;
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;
    using UserApi.Interfaces.Repositories;
    using PersistenceLib.Domains.UserApi;
    using UserApi.Interfaces.Controllers;

    /// <summary>
    /// Rest API User controller
    /// </summary>
    [Route("api/users/")]
    [ApiController]
    public class UsersController : ControllerBase, IUserController
    {
        #region Fields
        private readonly IUserRepository _userRepository;
        private readonly IOptions<AppSettingsHelper> _appSettings;
        #endregion

        #region Constructors
        public UsersController(IUserRepository userRepository, IOptions<AppSettingsHelper> appSettings)
        {
            _userRepository = userRepository;
            _appSettings = appSettings;
        }
        #endregion

        #region Actions
        /// <summary>
        /// Get all users (admins, customers)
        /// </summary>
        /// <returns>list of all users</returns>
        [HttpGet]
        [Route("getAll")]
        public async Task<List<User>> GetAllUsers()
        {
            return await _userRepository.GetUsers();
        }

        /// <summary>
        /// Creation of new admin user
        /// </summary>
        /// <param name="userDto"></param>
        /// <returns>Instance of created user</returns>
        [HttpPost]
        [Route("create/admin")]
        public async Task<User> CreateAdmin([FromBody] RegisterUserDto userDto)
        {
            return await _userRepository.CreateAdmin(userDto.Username, userDto.Password);
        }

        /// <summary>
        /// Login process
        /// </summary>
        /// <param name="userDto">Data transfer object for users</param>
        /// <returns>Instance of Action Result</returns>
        [HttpPost]
        [Route("authenticate")]
        public async Task<ActionResult> Authenticate(RegisterUserDto userDto)
        {
            var entity = await _userRepository.ValidateUser(userDto);

            if (entity == null)
                return BadRequest("Username or password is incorrect");

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Value.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, userDto.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // return basic user info (without password) and token to store client side
            return Ok(new
            {
                Id = userDto.Username,
                Token = tokenString
            });
        }


        /// <summary>
        /// Auth checker via JWT token
        /// </summary>
        /// <param name="token">authentication token</param>
        /// <returns>Instance of Action Result</returns>
        [AllowAnonymous]
        [HttpPost("isAuthenticated")]
        public async Task<IActionResult> IsAuthenticated([FromBody] UserTokenDto token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            JwtSecurityToken jwt;

            // Trying to parse the token string
            try
            {
                jwt = tokenHandler.ReadJwtToken(token.TokenString);
            }
            catch (ArgumentException)
            {
                return BadRequest("UnAuthorized");
            }

            // Get user id from token
            var userIdentifier = jwt.Claims.SingleOrDefault(c => c.Type == "unique_name")?.Value;
            int.TryParse(userIdentifier, out var userId);

            // Get user from database

            User user = null;

            try
            {
                user = await _userRepository.Get(userId);
            }
            catch (NullReferenceException)
            {

                BadRequest("Unauthorized");

            }
            

            return Ok(new
            {
                user?.Username,
                TokenString = token.TokenString
            });
        }

        #endregion

    }
}
