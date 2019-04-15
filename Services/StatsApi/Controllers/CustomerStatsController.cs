using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StatsApi.Contexts;
using StatsApi.Dto;

namespace StatsApi.Controllers
{
    [Route("api/stats/customers/")]
    [ApiController]
    public class CustomerStatsController : ControllerBase
    {
        private readonly CustomerStatsContext _context;

        public CustomerStatsController(CustomerStatsContext context)
        {
            _context = context;

        }


        [Route("summary")]
        [HttpGet]
        public ActionResult<CustomerSummaryDto> Get()
        {

            var count =_context.Customers.Count();

            return Ok(new CustomerSummaryDto
            {
                CustomerCount = _context.Customers.Count()
            });
        }

       
    }
}
