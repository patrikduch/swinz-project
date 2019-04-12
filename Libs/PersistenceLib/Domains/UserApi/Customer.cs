//-----------------------------------------------------------------------
// <copyright file="Customer.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace PersistenceLib.Domains.UserApi
{
    using OrderApi;

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
        /// Gets or sets customer`s discount
        /// </summary>
        public int Discount { get; set; }

        /// <summary>
        /// Navigation property to User entity
        /// </summary>
        public User User { get; set; }


        public virtual Order Order { get; set; }

    }
}
