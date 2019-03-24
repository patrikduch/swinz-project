//-----------------------------------------------------------------------
// <copyright file="CustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using Microsoft.IdentityModel.Tokens;

namespace UserApi.Repositories
{
    using Contexts;
    using Domains;
    using Dto.Customers;
    using Dto.Users;
    using Helpers;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

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
        public async Task<List<CustomerUserDto>> GetCustomers()
        {
            return null;
        }

        /// <summary>
        /// Remove customer by its id
        /// </summary>
        /// <param name="customerId">customer identifier</param>
        /// <returns></returns>
        public async Task RemoveCustomer(int customerId)
        {
            return;
        }

        /// <summary>
        /// Customer update
        /// </summary>
        /// <param name="id">customer`s identifier</param>
        /// <param name="customerDto">Data transfer object for customer</param>
        /// <returns></returns>
        public async Task<Customer> UpdateCustomer(int id, CustomerDto customerDto)
        {
            return null;
        }

        private async Task<User> PrepareUser(UserDto dto, string roleName)
        {
            var entity = await _userContext.Users.Include(u => u.UserRoles).Where(u => u.Username == dto.Username).FirstOrDefaultAsync();

            // This user already exists
            if (entity != null) return null;


            // Create role if not exists
            var roleEntity = await _userContext.Roles.FirstOrDefaultAsync(r => r.Name == roleName) ?? new Role()
            {
                Name = roleName
            };


            // List of roles that will be added to new user
            var roles = new List<UserRoles>
            {
                new UserRoles() {User = new User() {Username = dto.Username}, Role = roleEntity}
            };


            // Encryption process
            CryptographyHelper.CreatePasswordHash(dto.Password, out var passwordHash, out var passwordSalt);

            // Creation of new user
            var newUser = new User
            {
                Username = dto.Username,
                UserRoles = roles,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };


            return newUser;

        }


        /// <summary>
        /// Creation of customer
        /// </summary>
        /// <param name="customerDto">Data transfer object for customers</param>
        /// <returns></returns>
        public async Task<CustomerUserDto> CreateCustomer(CustomerRegisterDto customerDto)
        {
            return null;


        }

  





        #endregion
    }
}
