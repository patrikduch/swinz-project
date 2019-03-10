//-----------------------------------------------------------------------
// <copyright file="CustomersController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------=

using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using RestApi.Dto;

namespace RestApi.Controllers
{
    using System.Collections.Generic;
    using BusinessLayer.Models;
    using BusinessLayer.Repositories;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// REST Controller for handling customers events
    /// </summary>
    public class CustomersController : Controller
    {
        /// <summary>
        /// Route for getting all customers
        /// </summary>
        /// <returns></returns>
        [HttpGet] [Route("api/customers")]
        public IEnumerable<Customer> Get()
        {
            var customerRepository = new CustomerRepository();
            return customerRepository.GetAllCustomers();
        }

        [HttpDelete] [Route("api/customers/delete/{id}")]
        public async Task DeleteCustomer(int id)
        {
            var customerRepository = new CustomerRepository();
            await customerRepository.DeleteCustomer(id);
        }
    }
}