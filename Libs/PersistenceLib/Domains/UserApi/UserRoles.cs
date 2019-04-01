using System;
using System.Collections.Generic;
using System.Text;

namespace PersistenceLib.Domains
{
    /// <summary>
    /// Associative table for user and roles
    /// </summary>
    public class UserRoles
    {
        /// <summary>
        /// Gets or sets user role`s identifier
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets user`s identifier
        /// </summary>
        public int UserId { get; set; }

        /// <summary>
        /// Gets or sets role identifier
        /// </summary>
        public int RoleId { get; set; }

        /// <summary>
        /// Gets or sets reference to the User object
        /// </summary>

        public User User { get; set; }
        /// <summary>
        /// Gets or sets reference to the Role object
        /// </summary>
        public Role Role { get; set; }


    }
}
