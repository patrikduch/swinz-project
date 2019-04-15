

using System;
using Microsoft.EntityFrameworkCore;
using StatsApi.Interfaces;

namespace StatsApi.Controllers
{
    using System.Linq;
    using Microsoft.AspNetCore.Mvc;
    using Contexts;
    using Dto;


    [Route("api/stats/customers/")]
    [ApiController]
    public class CustomerStatsController : ControllerBase
    {
        private readonly CustomerStatsContext _context;
        private readonly ICustomStatsRepository _repository;

        public CustomerStatsController(CustomerStatsContext context, ICustomStatsRepository customerStatsRepository)
        {
            _repository = customerStatsRepository;
            _context = context;

        }


        [Route("summary")]
        [HttpGet]
        public ActionResult<CustomerSummaryDto> Get()
        {

            //var latestIncome = _context.Orders.Where(c => c.CreationDate.Year == DateTime.Now.Year)
              //  .SelectMany(c => c.OrderProducts).Sum(c=>c.Product.Price);

            //var soldCount = _context.Orders.Include(c => c.OrderProducts)
              //  .SelectMany(c => c.OrderProducts)
              //  .Select(c => c.Product).Count();


            return Ok(new CustomerSummaryDto
            {
                //CustomerCount = _context.Customers.Count(),
                //ProductCount = _context.Products.Count(c => c.IsDeleted.Equals(false)),
                LatestIncome = _repository.GetLatestIncome(_context.Orders),
                //SoldCount = soldCount
            
            });
        }

       
    }
}
