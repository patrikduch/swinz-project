//-----------------------------------------------------------------------
// <copyright file="CustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using UserApi.Dto;

namespace UserApi.Repositories
{
    using UserApi.Interfaces.Repositories;
    using Microsoft.EntityFrameworkCore;
    using Contexts;
    using Domains;
    using Dto.Customers;
    using Dto.Users;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using PersistenceLib;
    using UserApi.Interfaces.Helpers;
    using Mocking;

    /// <summary>
    /// Repository for customer`s manipulation
    /// </summary>
    public class CustomerRepository : Repository<Customer>, ICustomerRepository 
    {
        #region Fields
        /// <summary>
        /// User context instance
        /// </summary>
        private readonly IUserHelperService _userHelperService;
        #endregion

        public UserContext UserContext => Context as UserContext;

        #region Constructors
        /// <summary>
        /// Inject constructor for Customer repository
        /// </summary>
        /// <param name="userContext">Context of all users</param>
        public CustomerRepository(IUserContextService context, IUserHelperService userHelperService) : base(context.UserContext)
        {
            _userHelperService = userHelperService;
        }


        #endregion

        #region Methods
        /// <summary>
        /// Creation of customer
        /// </summary>
        /// <param name="customerDto">Data transfer object for customers</param>
        /// <returns></returns>
        public async Task<Customer> CreateCustomer(CustomerRegisterDto customerDto)
        {
            if (customerDto.FirstName == string.Empty|| customerDto.Lastname == string.Empty)
                return null; // Creation cannot be performed

            var user = await _userHelperService.PrepareUser(new UserDto
            {
                Username = customerDto.Username,
                Password = customerDto.Password
            }, "Customer");

            // Creation of customer object from user a customer data
            var customerResult = new Customer
            {
                FirstName = customerDto.FirstName,
                LastName = customerDto.Lastname,
                User = user
            };

            // Add new object to the customer collection
            UserContext.Customers.Add(customerResult);

            // Return new added object
            return customerResult;
        }

        /// <summary>
        /// Get all customers without restrictions
        /// </summary>
        /// <returns>Collection of customers</returns>
        public async Task<List<CustomerUserDto>> GetAllCustomers()
        {
            var customers = await UserContext.Customers.Include(c => c.User).ToListAsync();
            return _userHelperService.CustomerEntityToDto(customers).ToList();
        }

        public async Task<List<CustomerUserDto>> GetCustomersPaged(int from, int to, int pageSize)
        {
            var customers = await UserContext.Customers.Include(c => c.User).Skip(from).Take(to).ToListAsync();

            return _userHelperService.CustomerEntityToDto(customers).ToList();
        }



        #endregion
    }
}
