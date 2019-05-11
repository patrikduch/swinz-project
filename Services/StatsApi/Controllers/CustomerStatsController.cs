//-----------------------------------------------------------------------
// <copyright file="CustomerStatsController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

using PersistenceLib.Domains.OrderApi;
using StatsApi.Helpers.CustomerStatistics;
using StatsApi.Models.Statistics;

namespace StatsApi.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using System.Linq;
    using Interfaces;
    using Microsoft.AspNetCore.Mvc;
    using Contexts;
    using Dto;


    /// <summary>
    /// REST API controller for handling customer`s statistics
    /// </summary>
    [Route("api/stats/customers/")]
    [ApiController]
    public class CustomerStatsController : ControllerBase
    {
        private readonly CustomerStatsContext _context;
        private readonly ICustomerStatsRepository _repository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <param name="customerStatsRepository"></param>
        public CustomerStatsController(CustomerStatsContext context, ICustomerStatsRepository customerStatsRepository)
        {
            _repository = customerStatsRepository;
            _context = context;

        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Route("summary")]
        [HttpGet]
        public ActionResult<CustomerSummaryDto> GetSummaryStats()
        {
            return Ok(new CustomerSummaryDto
            {
                CustomerCount = _context.Customers.Count(),
                ProductCount = _context.Products.Count(c => c.IsDeleted.Equals(false)),
                LatestIncome = _repository.GetLatestIncome(_context.Orders),
                SoldCount = _repository.GetSoldCount(_context.Orders)
            
            });
        }


        [Route("graph/summary")]
        [HttpGet]
        public async Task<ActionResult> GetGraphMonthSummary()
        {

            var monthData = MonthStatsHelper.GetMonthsData(_context.Orders);

            var test = new List<CustomerAvgValuationDto>();

            foreach (var monthModel in monthData)
            {
                var sum = 0;

                foreach (var monthModelProductsId in monthModel.ProductsIds)
                {
                    sum += _context.Products.SingleOrDefault(c => c.Id == monthModelProductsId).Price;
                }

                test.Add(new CustomerAvgValuationDto
                {
                    MonthId = monthModel.MonthId,
                    TotalSum = sum
                });

            }

            return Ok(test);
        }



        [Route("graph/average/summary")]
        [HttpGet]
        public async Task<ActionResult> GetGraphAverageSummary()
        {

            var monthData = MonthStatsHelper.GetMonthsData(_context.Orders);


            var test = new List<CustomerAvgValuationDto>();

            foreach (var monthModel in monthData)
            {
                var sum = 0;

                foreach (var monthModelProductsId in monthModel.ProductsIds)
                {
                    sum += _context.Products.SingleOrDefault(c => c.Id == monthModelProductsId).Price;
                }

                test.Add(new CustomerAvgValuationDto
                {
                    MonthId = monthModel.MonthId,
                    TotalSum =  sum /  monthModel.ProductsIds.Count
                });

            }

            return Ok(test);
        }
    }
}
