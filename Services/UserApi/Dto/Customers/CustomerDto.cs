//-----------------------------------------------------------------------
// <copyright file="CustomerDto.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Dto.Customers
{
    /// <summary>
    /// Data transfer object for customers
    /// </summary>
    public class CustomerDto
    {
        /// <summary>
        /// Gets or sets customer`s identifier
        /// </summary>
        public int? Id { get; set; }

        /// <summary>
        /// Gets or sets customer`s first name
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or sets customer`s last name
        /// </summary>
        public string LastName { get; set; }

        public int Discount { get; set; }

    }
}
