//-----------------------------------------------------------------------
// <copyright file="Customer.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace CustomerApi.Domain
{
    /// <summary>
    /// Modal class for customer table
    /// </summary>
    public class Customer
    {
        public Customer()
        {
            
        }

        /// <summary>
        /// Customer identifier
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Customer`s first name
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// Customer`s surname
        /// </summary>
        public string Surname { get; set; }


    }
}
