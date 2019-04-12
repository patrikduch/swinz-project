//-----------------------------------------------------------------------
// <copyright file="CustomerRegisterDto.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Dto.Customers
{
    /// <summary>
    /// Data transfer object for creating new customers
    /// </summary>
    public class CustomerRegisterDto
    {
        /// <summary>
        /// Gets or sets customer`s first name
        /// </summary>
        public string FirstName { get; set; }
        /// <summary>
        /// Gets or sets customer`s surname
        /// </summary>
        public string Lastname { get; set; }

        /// <summary>
        /// Gets or sets customer`s username
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Gets or sets customer`s password
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets customer`s discount
        /// </summary>
        public int Discount{ get; set; }


    }
}
