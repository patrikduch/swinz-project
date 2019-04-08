using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.Dto
{
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
