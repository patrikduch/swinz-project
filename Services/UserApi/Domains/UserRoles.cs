// ----------------------------------------------------------------------
// <copyright file="UserRoles.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Domains
{
    /// <summary>
    /// Associative table for user and roles
    /// </summary>
    public class UserRoles
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int RoleId { get; set; }

        public User User { get; set; }

        public Role Role { get; set; }


    }
}
