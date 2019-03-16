//-----------------------------------------------------------------------
// <copyright file="UserRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System.Linq;
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

            

            CryptographyHelper.CreatePasswordHash(password, out var passwordHash, out var passwordSalt);

            var newUser = new User
            {
                Username = username,
                UserRoles = roles,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            _context.Users.Add(newUser);

            await _context.SaveChangesAsync();

            return await _context.Users.LastOrDefaultAsync();
        }

        public Task<User> CreateCustomer(User user)
        {
            throw new System.NotImplementedException();
        }

       



        #endregion


    }
}
