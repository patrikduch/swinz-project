//-----------------------------------------------------------------------
// <copyright file="User.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Domains
{
    using System.Collections.Generic;

    /// <summary>
    /// Modal class that represents User entity
    /// </summary>
    public class User
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
        /// Gets or sets user`s password hash
        /// </summary>
        public byte[] PasswordHash { get; set; }

        /// <summary>
        /// Gets or sets user`s password salt
        /// </summary>
        public byte[] PasswordSalt { get; set; }

        /// <summary>
        /// Gets or sets user`s roles (navigation property)
        /// </summary>
        public IList<UserRoles> UserRoles { get; set; }

        /// <summary>
        /// Navigation property
        /// </summary>
        public Customer Customer { get; set; }




    }
}
