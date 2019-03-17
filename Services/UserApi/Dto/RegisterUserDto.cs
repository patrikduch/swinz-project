//-----------------------------------------------------------------------
// <copyright file="RegisterUserDto.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using UserApi.Interfaces;

namespace UserApi.Dto
{
    /// <summary>
    /// Dto for creating new users
    /// </summary>
    public class RegisterUserDto
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

    }
}
