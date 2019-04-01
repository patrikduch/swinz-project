using System;
using System.Collections.Generic;
using System.Text;

namespace PersistenceLib.Domains
{
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
