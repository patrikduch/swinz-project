using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLayer.Models;
using BusinessLayer.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace RestApi.Controllers
{
    public class CustomersController : Controller
    {
        [HttpGet] [Route("api/customers")]
        public IEnumerable<Customer> Get()
        {
            CustomerRepository customerRepository = new CustomerRepository();


            return customerRepository.GetAllCustomers();
        }
    }
}