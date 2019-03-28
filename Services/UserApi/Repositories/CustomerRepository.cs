//-----------------------------------------------------------------------
// <copyright file="CustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------


using System;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using PersistenceLib;
using UserApi.Interfaces.Helpers;
using UserApi.Interfaces.Repositories;
using UserApi.Mocking;

namespace UserApi.Repositories
{
    using Contexts;
    using Domains;
    using Dto.Customers;
    using Dto.Users;
    using Helpers;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Internal;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    /// <summary>
    /// Repository for customer`s manipulation
    /// </summary>
    public class CustomerRepository : Repository<Customer>, ICustomerRepository 
    {
        #region Fields
        /// <summary>
        /// User context instance
        /// </summary>
        #endregion

        #region Constructors
        /// <summary>
        /// Inject constructor for Customer repository
        /// </summary>
        /// <param name="userContext">Context of all users</param>
        //public CustomerRepository(UserContext userContext)
        //{
          //  _userContext = userContext;
        //}


        public UserContext UserContext => Context as UserContext;

        private readonly IUserHelperService _userHelperService;


        public CustomerRepository(IUserContextService context, IUserHelperService userHelperService) : base(context.UserContext)
        {
            _userHelperService = userHelperService;
        }


        #endregion

        #region Methods

        /// <summary>
        /// Transformer of Customer entity into DTO
        /// </summary>
        /// <param name="customers"></param>
        /// <returns></returns>
        public IEnumerable<CustomerUserDto> CustomerEntityToDto(IEnumerable<Customer> customers)
        {
            return customers.Select(customer => new CustomerUserDto
            {
                Id = customer.Id,
                FirstName = customer.FirstName,
                Lastname = customer.LastName,
                Username = customer.User.Username
            });
        }


        /// <summary>
        /// Creation of customer
        /// </summary>
        /// <param name="customerDto">Data transfer object for customers</param>
        /// <returns></returns>
        public async Task<Customer> CreateCustomer(CustomerRegisterDto customerDto)
        {

            if (customerDto.FirstName == null)
            {
                customerDto.FirstName = string.Empty;
            }

            if (customerDto.Lastname == null)
            {
                customerDto.Lastname = " ";
            }


            var userDto = new UserDto
            {
                Username = customerDto.Username,
                Password = customerDto.Password
            };


            var result = await UserContext.Users.ToListAsync();

            var user = await _userHelperService.PrepareUser(userDto, "Customer");


            var customerResult = new Customer
            {
                FirstName = customerDto.FirstName,
                LastName = customerDto.Lastname,
                User = user
            };


            UserContext.Customers.Add(customerResult);


            return customerResult;


        }


        #endregion
    }
}
