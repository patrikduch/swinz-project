﻿//-----------------------------------------------------------------------
// <copyright file="CustomerDto.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Dto
{
    /// <summary>
    /// Data transfer object for customers
    /// </summary>
    public class CustomerDto
    {
        /// <summary>
        /// Gets or sets customer`s username
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Gets or sets customer`s password
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets customer`s first name
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or sets customer`s last name
        /// </summary>
        public string Lastname { get; set; }

    }
}