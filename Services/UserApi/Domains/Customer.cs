//-----------------------------------------------------------------------
// <copyright file="Role.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Domains
{
    /// <summary>
    /// Model that represents Customer entity
    /// </summary>
    public class Customer
    {
        public int? Id { get; set; }

        public string FirstName { get; set; }

        public string Surname { get; set; }

        public User User { get; set; }
    }
}
