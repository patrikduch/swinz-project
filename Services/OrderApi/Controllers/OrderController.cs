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

            var product = new Product
            {
                Id = 1,
                Name = "Aaa",
                Price = 45

            };


            _productContext.Products.Add(product);

            var order = new Order
            {
                Id = 1,
                CustomerId = 1,

            };


            _productContext.Orders.Add(order);


            var t = new OrderProduct
            {
                Id = 1,
                ProductId = product.Id,
                OrderId = order.Id


            };

            _productContext.OrderProducts.Add(t);


            await _productContext.SaveChangesAsync();




            return null;
        }



    }
}
