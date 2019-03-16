﻿//-----------------------------------------------------------------------
// <copyright file="UsersController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using UserApi.Dto;

namespace UserApi.Controllers
{
    using System.Threading.Tasks;
    using Domains;
    using Interfaces;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Rest API User controller
    /// </summary>
    [Route("api/users/")]
    [ApiController]
    public class UsersController : ControllerBase, IUserController
    {
        #region Fields
        private readonly IUserRepository _userRepository;
        #endregion

        #region Constructors
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        #endregion

        #region Methods
        [HttpGet]
        [Route("getAll")]
        public async Task<List<User>> GetAllUsers()
        {
            return await _userRepository.GetUsers();
        }

        [HttpPost]
        [Route("create/admin")]
        public async Task<User> CreateAdmin([FromBody] RegisterUserDto userDto)
        {
            return await _userRepository.CreateAdmin(userDto.Username, userDto.Password);
        }

        [HttpPost]
        [Route("authenticate")]
        public async Task<User> Authenticate(RegisterUserDto userDto)
        {
            return await _userRepository.Authenticate(userDto);
        }

        [HttpPost]
        [Route("create/customer")]
        public Task<User> CreateCustomer(User user)
        {
            throw new System.NotImplementedException();
        }

        #endregion







    }
}
