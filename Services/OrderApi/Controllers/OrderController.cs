//-----------------------------------------------------------------------
// <copyright file="OrderController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

using PersistenceLib.Domains.OrderApi;

namespace OrderApi.Controllers
{
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
        public async Task<ActionResult<OrderListDto>> CreateOrder([FromBody] OrderDto dto)
        {
            var res = _unitOfWork.OrderRepository.CreateOrder(dto.ProductArray, dto.CustomerId);
            _unitOfWork.OrderRepository.Add(res.Order);
            await _unitOfWork.Complete();


            var orderEntity = await _unitOfWork.OrderRepository.Get(res.Order.Id);

            

            var test = new OrderListDto
            {
                Id = orderEntity.Id,
                CreationDate = orderEntity.CreationDate,
                CustomerId = orderEntity.CustomerId
                
            };

            return Ok(test);
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
        public async Task<ActionResult> UpdateOrder([FromBody] OrderDto dto)
        {
            _unitOfWork.OrderRepository.UpdateOrder(1);

            return Ok("ok");
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
