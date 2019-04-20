//-----------------------------------------------------------------------
// <copyright file="OrderListDto.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace OrderApi.Dto
{
    using System;
    using System.Collections.Generic;
    using PersistenceLib.Domains.OrderApi;

    /// <summary>
    /// Dto for listing all orders
    /// </summary>
    public class OrderListDto
    {

        /// <summary>
        /// Order identifier
        /// </summary>
        public int Id { get; set; }


        public List<Product> Products { get; set; }

        /// <summary>
        /// Creation date of order
        /// </summary>
        public DateTime CreationDate{ get; set; }


        /// <summary>
        /// Customer`s identifier
        /// </summary>
        public int CustomerId { get; set; }

    }
}
