//-----------------------------------------------------------------------
// <copyright file="CustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System;
using System.Linq;

namespace CustomerApi.Repositories
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using CustomerApi.Domain;
    using CustomerApi.Interfaces;
    using CustomerApi.Contexts;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Repository for customer`s manipulation
    /// </summary>
    public class CustomerRepository : ICustomerRepository
    {
        #region Fields
        private readonly CustomerContext _context;
        #endregion

        #region Constructors
        public CustomerRepository(CustomerContext customerContext)
        {
            _context = customerContext;
        }
        #endregion

        #region Methods
        /// <summary>
        /// Get all customers
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Customer>> GetCustomers()
        {
            return await _context.Customers.ToListAsync();
        }

        /// <summary>
        /// Remove customer by its id
        /// </summary>
        /// <param name="customerId">customer identifier</param>
        /// <returns></returns>
        public async Task RemoveCustomer(int customerId)
        {
            var customerEntity = await _context.Customers.Where(c => c.Id == customerId).FirstOrDefaultAsync();
            _context.Customers.Remove(customerEntity);
            await _context.SaveChangesAsync();

        }

        /// <summary>
        /// Create customer (Registration of user)
        /// </summary>
        /// <param name="firstName">first name of customer</param>
        /// <param name="surname">surname of customer</param>
        /// <returns></returns>
        public async Task<Customer> CreateCustomer(string firstName, string surname)
        {

            var newCustomer = new Customer
            {
                FirstName = firstName,
                Surname = surname
            };
           
            _context.Customers.Add(newCustomer);

            await _context.SaveChangesAsync();

            return await _context.Customers.LastOrDefaultAsync();
        }

        /// <summary>
        /// Customer update
        /// </summary>
        /// <param name="id">customer`s identifier</param>
        /// <param name="firstName">customer`s firstname</param>
        /// <param name="surname">customer`s surname</param>
        /// <returns></returns>
        public async Task<Customer> UpdateCustomer(int id, string firstName, string surname)
        {
            var entity = await _context.Customers.SingleOrDefaultAsync(c=>c.Id == id);

            if (entity == null) return null;
          
            entity.FirstName = firstName;
            entity.Surname = surname;

            await _context.SaveChangesAsync();

            return entity;

        }

        #endregion

    }
}
