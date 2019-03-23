//-----------------------------------------------------------------------
// <copyright file="CustomerEdit.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Dto.Customers
{
    /// <summary>
    /// Data transfer object for editing specific customer
    /// </summary>
    public class CustomerEditDto
    {
        /// <summary>
        /// Gets or sets customer`s identifier
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets customer`s first name
        /// </summary>
        public string Firstname { get; set; }

        /// <summary>
        /// Gets or sets customer`s surname
        /// </summary>
        public string Surname { get; set; }

    }
}
