//-----------------------------------------------------------------------
// <copyright file="CustomerController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace CustomerApi.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using CustomerApi.Domain;
    using CustomerApi.Interfaces;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Rest API Customer controller
    /// </summary>
    [Route("api/")]
    [ApiController]
    public class CustomerController : ControllerBase, ICustomerController
    {
        #region Fields
        private readonly ICustomerRepository _customerRepository;
        #endregion

        public CustomerController()
        {
            
        }

        #region Constructors
        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }
        #endregion

        #region Methods
        /// <summary>
        /// Getting all customers without restrictions
        /// </summary>
        /// <returns></returns>
        [Route("customers")]
        [HttpGet]
        public Task<IEnumerable<Customer>> Get()
        {
            return _customerRepository.GetCustomers();
        }

        /// <summary>
        /// Remove customer by id
        /// </summary>
        /// <param name="id">customer identifier</param>
        /// <returns></returns>
        [Route("customers/delete/{id}")]
        [HttpDelete]
        public async Task DeleteCustomer(int id)
        {
            await _customerRepository.RemoveCustomer(id);
        }

        /// <summary>
        /// Add new customer
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        [Route("customers/create")]
        [HttpPost]
        public async Task<Customer> AddCustomer([FromBody] Customer customer)
        {
            return await _customerRepository.CreateCustomer(customer.FirstName, customer.Surname);
        }

        /// <summary>
        /// Update credentials of specific customer
        /// </summary>
        /// <param name="customer">Customer entity</param>
        /// <returns></returns>
        [Route("customers/update")]
        [HttpPost]
        public async Task<Customer> UpdateCustomer(Customer customer)
        {
            return await _customerRepository.UpdateCustomer(customer.Id, customer.FirstName, customer.Surname);
        }

        #endregion
    }
}
