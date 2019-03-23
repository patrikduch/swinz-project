//-----------------------------------------------------------------------
// <copyright file="UserDto.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Dto.Users
{
    /// <summary>
    /// Data transfer object for users
    /// </summary>
    public class UserDto
    {

        /// <summary>
        /// Gets or sets user`s username
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Gets or sets user`s password
        /// </summary>
        public string Password { get; set; }
    }
}
