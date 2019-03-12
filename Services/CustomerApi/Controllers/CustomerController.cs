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
    public class CustomerController : ControllerBase
    {
        #region Fields
        private readonly ICustomerRepository _customerRepository;
        #endregion

        #region Constructors
        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }
        #endregion

        #region Methods
        /// <summary>
        /// End point for getting all customers without restrictions
        /// </summary>
        /// <returns></returns>
        [Route("customers")]
        [HttpGet]
        public Task<IEnumerable<Customer>> Get()
        {
            return _customerRepository.GetCustomers();
        }
        #endregion

    }
}
