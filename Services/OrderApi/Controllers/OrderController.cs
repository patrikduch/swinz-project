//-----------------------------------------------------------------------
// <copyright file="OrderController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace OrderApi.Controllers
{
    using PersistenceLib.Domains.OrderApi;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Dto;
    using OrderApi.Interfaces.UnitOfWork;

    /// <summary>
    /// REST API controller for handling orders
    /// </summary>
    [Route("api/orders/")]
    [ApiController]
    public class OrderController : ControllerBase
    {
    
        /// <summary>
        /// Reference of injection interface <seealso cref="IProductUnitOfWork"/>
        /// </summary>
        private readonly IOrderUnitOfWork _unitOfWork;

        /// <summary>
        /// Initializes a new instance of the <seealso cref="OrderController"/> class.
        /// </summary>
        /// <param name="unitOfWork"></param>
        public OrderController(IOrderUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        

        /// <summary>
        /// Creation of new order
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Route("create")]
        [HttpPost]
        public async Task<ActionResult> CreateOrder([FromBody] OrderDto dto)
        {
            var res = _unitOfWork.OrderRepository.CreateOrder(dto.ProductArray, dto.CustomerId);
            _unitOfWork.OrderRepository.Add(res.Order);
            await _unitOfWork.Complete();

            var productIds = res.Order.OrderProducts.Select(c=>c.ProductId).ToList();
            var products = new List<Product>();
        
            foreach (var i in productIds)
            {
                var entity = await _unitOfWork.ProductRepository.Get(i);
                // Unnecessary data is nullified
                entity.OrderProducts = null;
                // Added new entity to the product collection
                products.Add(entity);
            }

            return Ok(new { res.Order.Id, res.Order.CreationDate, res.Order.CustomerId, products });
        }

        /// <summary>
        /// Get all orders
        /// </summary>
        /// <returns></returns>
        [Route("getAll")]
        [HttpGet]
        public async Task<IEnumerable<OrderListDto>> GetAllOrders()
        {
            var orders = await _unitOfWork.OrderRepository.GetOrders();
            return orders.ToList();
        }


        [Route("update")]
        [HttpPost]
        public async Task<ActionResult> UpdateOrder([FromBody] OrderUpdateDto dto)
        {
            var entity = await _unitOfWork.OrderRepository.UpdateOrder(dto.OrderId, dto);

            if (entity == null)
            {
                BadRequest("Data cannot be processed");
            }

            var productIds = entity.OrderProducts.Select(c => c.ProductId).ToList();
            var products = new List<Product>();

            foreach (var i in productIds)
            {
                var entityProduct = await _unitOfWork.ProductRepository.Get(i);
                // Unnecessary data is nullified
                entityProduct.OrderProducts = null;
                // Added new entity to the product collection
                products.Add(entityProduct);
            }

            

            return Ok(new { entity.Id, entity.CreationDate, entity.CustomerId, products});
        }


        /// <summary>
        /// Deletion of specific order
        /// </summary>
        /// <param name="orderId"></param>
        /// <returns></returns>
        [Route("delete/{orderId}")]
        [HttpDelete]
        public async Task<ActionResult> DeleteOrder(int orderId)
        {
            await _unitOfWork.OrderRepository.DeleteOrder(orderId);

            return Ok("ok");
        }

    }
}
