using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderApi.Dto
{
    public class OrderDto
    {
        public int[] ProductArray { get; set; }
        public int CustomerId { get; set; }

        /// <summary>
        /// Gets or Sets Fee type identifier
        /// </summary>
        public int FeeId { get; set; }

    }
}
