//-----------------------------------------------------------------------
// <copyright file="OrderController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

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
            return Ok("ok");
        }
    }
}
