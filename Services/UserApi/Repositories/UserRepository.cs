//-----------------------------------------------------------------------
// <copyright file="UserRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System.Linq;
using UserApi.Dto;
using UserApi.Helpers;

namespace UserApi.Repositories
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Contexts;
    using Domains;
    using Interfaces;

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
            var entity = await _context.Users.Include(u => u.UserRoles).Where(u => u.Username == username).FirstOrDefaultAsync();

            // This user already exists
            if (entity != null) return null;


            // Create role if not exists
            var roleEntity = await _context.Roles.FirstOrDefaultAsync(r => r.Name == "Admin") ?? new Role()
            {
                Name = "Admin"
            };

            // List of roles that will be added to new user
            var roles = new List<UserRoles>
            {
                new UserRoles() {User = new User() {Username = username}, Role = roleEntity}
            };

            
            // Encryption process
            CryptographyHelper.CreatePasswordHash(password, out var passwordHash, out var passwordSalt);

            // Creation of new user
            var newUser = new User
            {
                Username = username,
                UserRoles = roles,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            // Affect tracking mechanism of EF
            _context.Users.Add(newUser);

            // Save changes to the database
            await _context.SaveChangesAsync();

            // Returns user
            return await _context.Users.Where(u=>u.Username == username).LastOrDefaultAsync();
        }

        public Task<User> CreateCustomer(User user)
        {
            throw new System.NotImplementedException();
        }

        /// <summary>
        /// Login for any user
        /// </summary>
        /// <param name="userDto">Username transfer object</param>
        /// <returns></returns>
        public async  Task<User> Authenticate(RegisterUserDto userDto)
        {
            if (string.IsNullOrEmpty(userDto.Username) || string.IsNullOrEmpty(userDto.Password))
                return null;

            var user = await _context.Users.SingleOrDefaultAsync(x => x.Username == userDto.Username);

            // check if username exists
            if (user == null)
                return null;

            return !CryptographyHelper.VerifyPasswordHash(userDto.Password, user.PasswordHash, user.PasswordSalt) ? null : user;

        }

        #endregion


    }
}
