//-----------------------------------------------------------------------
// <copyright file="RegisterUserDto.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Dto.Users
{
    /// <summary>
    /// Dto for creating new users
    /// </summary>
    public class RegisterUserDto
    {
        /// <summary>
        /// Gets or sets user`s identifier
        /// </summary>
        public int Id { get; set; }

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
