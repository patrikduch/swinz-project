//-----------------------------------------------------------------------
// <copyright file="CustomersController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System.Linq;

namespace UserApi.Controllers
{
    using UserApi.Interfaces.UnitOfWork;
    using Domains;
    using Dto.Customers;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using UserApi.Interfaces.Controllers;

    /// <summary>
    /// Rest API Customers controller
    /// </summary>
    [Route("api/customers/")]
    [ApiController]
    public class CustomersController : ControllerBase, ICustomerController
    {
        #region Fields

        /// <summary>
        /// Reference to the customer`s unit of work
        /// </summary>
        private readonly ICustomerUnitOfWork _customerUnitOfWork;

        #endregion
        #region Constructors

        /// <summary>
        /// Inject constructor for Customer`s Controller
        /// </summary>
        /// <param name="customerUnitOfWork">Unit of work for customer`a manipulation</param>
        public CustomersController(ICustomerUnitOfWork customerUnitOfWork)
        {
            _customerUnitOfWork = customerUnitOfWork;
        }
        #endregion
        #region Actions
        
        /// <summary>
        /// Creation of new customer
        /// </summary>
        /// <param name="customerDto">Data transfer object for customers</param>
        /// <returns>Instance of created user</returns>
        [HttpPost]
        [Route("create")]
        public async Task<CustomerUserDto> CreateCustomer([FromBody] CustomerRegisterDto customerDto)
        {
            var res = await _customerUnitOfWork.CustomerRepository.CreateCustomer(customerDto);
            await _customerUnitOfWork.Complete();

            var customerId =
                _customerUnitOfWork.CustomerRepository.Find(c =>
                    c.FirstName == res.FirstName && c.LastName == res.LastName).SingleOrDefault();

            return new CustomerUserDto
            {
                Id = customerId?.Id,
                FirstName = res.FirstName,
                LastName = res.LastName,
                Username = res.User.Username
            };
        }

        /// <summary>
        /// Get all customers from database
        /// </summary>
        /// <returns>List of all customers</returns>
        [HttpGet]
        [Route("getAll")]
        public async Task<IEnumerable<CustomerUserDto>> GetAllCustomers()
        {
            return await _customerUnitOfWork.CustomerRepository.GetAllCustomers();
        }


        /// <summary>
        /// Update customer by his id
        /// </summary>
        /// <param name="id">Customer`s identifier</param>
        /// <param name="dto">Data transfer object for customers</param>
        /// <returns>Customer instance</returns>
        [HttpPut]
        [Route("update/{id}")]
        public async Task<Customer> UpdateCustomer(int id, [FromBody] CustomerDto dto)
        {
            //return await _customerRepository.UpdateCustomer(id, dto);

            return null;
        }

        /// <summary>
        /// Remove customer by id
        /// </summary>
        /// <param name="id">customer identifier</param>
        /// <returns></returns>
        [Route("delete/{id}")]
        [HttpDelete]
        public async Task DeleteCustomer(int id)
        {
            var userEntity = (_customerUnitOfWork.UserRepository.Find(c => c.Customer.Id == id)).SingleOrDefault();

            if (userEntity != null)
            {
                userEntity.Customer = await _customerUnitOfWork.CustomerRepository.Get(id);
            }

            _customerUnitOfWork.UserRepository.Remove(userEntity);
            await _customerUnitOfWork.Complete();

        }
        #endregion
    }
}