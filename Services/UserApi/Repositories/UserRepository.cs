//-----------------------------------------------------------------------
// <copyright file="UserRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Repositories
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Contexts;
    using Domains;
    using Interfaces;
    using System.Linq;
    using Dto;
    using Helpers;

    /// <summary>
    /// Repository for user`s manipulation
    /// </summary>
    public class UserRepository : IUserRepository
    {

        #region Fields
        /// <summary>
        /// Context to manage users
        /// </summary>
        private readonly UserContext _context;
        #endregion

        #region Constructors
        /// <summary>
        /// Main repository constructor for injecting resources
        /// </summary>
        /// <param name="userContext">Context for user`s manipulation</param>
        public UserRepository(UserContext userContext)
        {
            _context = userContext;
        }
        #endregion

        #region Methods

        private async  Task<User> PrepareUser(UserDto dto, string roleName)
        {
            var entity = await _context.Users.Include(u => u.UserRoles).Where(u => u.Username == dto.Username).FirstOrDefaultAsync();

            // This user already exists
            if (entity != null) return null;


            // Create role if not exists
            var roleEntity = await _context.Roles.FirstOrDefaultAsync(r => r.Name == roleName) ?? new Role()
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
        /// User validation
        /// </summary>
        /// <param name="userDto">Username transfer object</param>
        /// <returns></returns>
        public async Task<User> ValidateUser(RegisterUserDto userDto)
        {
            if (string.IsNullOrEmpty(userDto.Username) || string.IsNullOrEmpty(userDto.Password))
                return null;

            var user = await _context.Users.SingleOrDefaultAsync(x => x.Username == userDto.Username);

            // check if username exists
            if (user == null)
                return null;

            return !CryptographyHelper.VerifyPasswordHash(userDto.Password, user.PasswordHash, user.PasswordSalt) ? null : user;

        }

        /// <summary>
        /// Get user by his identifier
        /// </summary>
        /// <param name="id"> identifier of user</param>
        /// <returns></returns>
        public  async  Task<User> GetUserById(int id)
        {
            return await _context.Users.SingleOrDefaultAsync(u => u.Id == id);
        }


        /// <summary>
        /// Get the list of all users
        /// </summary>
        /// <returns></returns>
        public async Task<List<User>> GetUsers()
        {
            return await _context.Users.Include(c => c.UserRoles).ToListAsync();
        }

        /// <summary>
        /// Creation of admin user
        /// </summary>
        /// <param name="username">username of new administrator</param>
        /// <param name="password">password of new administrator</param>
        /// <returns></returns>
        public async Task<User> CreateAdmin(string username, string password)
        {

            var dto = new UserDto
            {
                Username = username,
                Password = password
            };

            // Affect tracking mechanism of EF
            _context.Users.Add(await PrepareUser(dto, "Admin"));

            // Save changes to the database
            await _context.SaveChangesAsync();

            // Returns user
            return await _context.Users.Where(u=>u.Username == username).LastOrDefaultAsync();
        }

        /// <summary>
        /// Creation of customer
        /// </summary>
        /// <param name="customerDto">Data transfer object for customers</param>
        /// <returns></returns>
        public async Task<User> CreateCustomer(CustomerDto customerDto)
        {
            // Creation of userDto from customerDto for user preparation
            var userDto = new UserDto
            {
                Username = customerDto.Username,
                Password = customerDto.Password
            };

            // User preparation
            var userEntity = await PrepareUser(userDto, "Customer");

            // Customer properites assigment
            userEntity.Customer = new Customer
            {
                FirstName = customerDto.FirstName,
                Surname =  customerDto.Lastname
                
            };

            // Affect tracking mechanism of EF
            _context.Users.Add(userEntity);

            // Save changes to the database
            await _context.SaveChangesAsync();

            // Returns user
            return await _context.Users.Where(u => u.Username == customerDto.Username).LastOrDefaultAsync();
        }

        #endregion


    }
}
