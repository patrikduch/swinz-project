using System.Linq;
using StatsApi.Interfaces;

namespace StatsApi.Controllers
{
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
            return Ok(new CustomerSummaryDto
            {
                CustomerCount = _context.Customers.Count(),
                ProductCount = _context.Products.Count(c => c.IsDeleted.Equals(false)),
                LatestIncome = _repository.GetLatestIncome(_context.Orders),
                SoldCount = _repository.GetSoldCount(_context.Orders)
            
            });
        }

       
    }
}
