//-----------------------------------------------------------------------
// <copyright file="User.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System.Collections.Generic;

namespace UserApi.Domains
{
    /// <summary>
    /// Modal class that represents User entity
    /// </summary>
    public class User
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public IList<UserRoles> UserRoles { get; set; }

    }
}
