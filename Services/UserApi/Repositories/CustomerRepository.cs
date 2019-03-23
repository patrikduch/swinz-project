//-----------------------------------------------------------------------
// <copyright file="CustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using UserApi.Dto.Customers;

namespace UserApi.Repositories
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Contexts;
    using Domains;
    using Interfaces;

    /// <summary>
    /// Repository for customer`s manipulation
    /// </summary>
    public class CustomerRepository : ICustomerRepository
    {
        #region Fields
        /// <summary>
        /// User context instance
        /// </summary>
        private readonly UserContext _userContext;
        #endregion

        #region Constructors
        /// <summary>
        /// Inject constructor for Customer repository
        /// </summary>
        /// <param name="userContext">Context of all users</param>
        public CustomerRepository(UserContext userContext)
        {
            _userContext = userContext;
        }

        #endregion

        #region Methods
        /// <summary>
        /// Get all customers
        /// </summary>
        /// <returns></returns>
        public async Task<List<Customer>> GetCustomers()
        {
            return await (from c in _userContext.Users
                where c.Customer != null
                select c.Customer).ToListAsync();

        }

        /// <summary>
        /// Remove customer by its id
        /// </summary>
        /// <param name="customerId">customer identifier</param>
        /// <returns></returns>
        public async Task RemoveCustomer(int customerId)
        {
            var entity = await (from c in _userContext.Users where c.CustomerId == customerId select c)
                .FirstOrDefaultAsync();

            if (entity == null) return; // No entity was founded

            _userContext.Remove(entity);
            await _userContext.SaveChangesAsync();
        }

        /// <summary>
        /// Customer update
        /// </summary>
        /// <param name="id">customer`s identifier</param>
        /// <param name="customerDto">Data transfer object for customer</param>
        /// <returns></returns>
        public async Task<Customer> UpdateCustomer(int id, CustomerDto customerDto)
        {
            var entity = await(from customers in _userContext.Users
                where customers.Customer.Id == id
                select customers.Customer).SingleOrDefaultAsync();

            if (entity == null) return null;

            entity.FirstName = customerDto.FirstName;
            entity.Surname = customerDto.Lastname;

            await _userContext.SaveChangesAsync();

            return entity;
        }


        
        

        #endregion
    }
}
