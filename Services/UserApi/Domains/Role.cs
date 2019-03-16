//-----------------------------------------------------------------------
// <copyright file="Role.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Domains
{
    using System.Collections.Generic;

    /// <summary>
    /// Model that represents Role entity
    /// </summary>
    public class Role
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public IList<UserRoles> UserRoles { get; set; }
    }
}
