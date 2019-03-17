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
        /// <summary>
        /// Gets or sets role`s identifier
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Gets or sets role`s name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets role`s navigation property
        /// </summary>
        public IList<UserRoles> UserRoles { get; set; }
    }
}
