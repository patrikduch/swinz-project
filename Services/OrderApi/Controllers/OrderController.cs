using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderApi.Contexts;
using OrderApi.Dto;
using OrderApi.Interfaces.UnitOfWork;
using PersistenceLib.Domains.OrderApi;
using PersistenceLib.Domains.UserApi;

namespace OrderApi.Controllers
{
    [Route("api/orders/")]
    [ApiController]
    public class OrderController : ControllerBase
    {

        /// <summary>
        /// Reference of injection interface <seealso cref="IProductUnitOfWork"/>
        /// </summary>
        private readonly IOrderUnitOfWork _unitOfWork;


        public OrderController(IOrderUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        /// <summary>
        /// Get all products without restrictions
        /// </summary>
        /// <returns></returns>
        [Route("getAll")]
        [HttpGet]
        public async Task<List<OrderListDto>> Get()
        {

            return await _unitOfWork.OrderRepository.GetAllOrders();

        }


        [Route("create")]
        [HttpPost]
        public async Task<ActionResult> CreateOrder([FromBody] OrderDto dto)
        {

            var res = _unitOfWork.OrderRepository.CreateOrder(dto.ProductId, dto.CustomerId);

            _unitOfWork.OrderRepository.Add(res.Order);

            await _unitOfWork.Complete();

            return Ok("ok");
        }



    }
}
