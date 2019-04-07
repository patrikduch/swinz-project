using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderApi.Contexts;
using PersistenceLib.Domains.OrderApi;
using PersistenceLib.Domains.UserApi;

namespace OrderApi.Controllers
{
    [Route("api/orders/")]
    [ApiController]
    public class OrderController : ControllerBase
    {

        private ProductContext _productContext;

        public OrderController(ProductContext productContext)
        {
            _productContext = productContext;
        }


        /// <summary>
        /// Get all products without restrictions
        /// </summary>
        /// <returns></returns>
        [Route("getAll")]
        [HttpGet]
        public async Task<IEnumerable<Product>> Get()
        {

            var res = _productContext.Orders.Include(c => c.Customer);
            

            return null;
        }



    }
}
