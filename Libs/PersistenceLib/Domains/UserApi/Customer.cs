//-----------------------------------------------------------------------
// <copyright file="Customer.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System.ComponentModel;
using PersistenceLib.Domains.OrderApi;

namespace PersistenceLib.Domains.UserApi
{
    /// <summary>
    /// Model that represents Customer entity
    /// </summary>
    public class Customer
    {
        /// <summary>
        /// Gets or sets customer`s identifier
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets customer`s first name
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or sets customer`s last name
        /// </summary>
        public string LastName { get; set; }

        public int UserId { get; set; }

        /// <summary>
        /// Navigation property
        /// </summary>
        public User User { get; set; }


        public virtual Order Order { get; set; }

    }
}
