//-----------------------------------------------------------------------
// <copyright file="UserRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Repositories
{
    using PersistenceLib;
    using Mocking;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Contexts;
    using Domains;
    using System.Linq;
    using Helpers;
    using Dto.Users;
    using UserApi.Interfaces.Repositories;

    /// <summary>
    /// Repository for user`s manipulation
    /// </summary>
    public class UserRepository : Repository<User>, IUserRepository
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
        /// <param name="context">Context service for user`s manipulation</param>
        public UserRepository(IUserContextService context) : base(context.UserContext)
        {
            UserContext = context.UserContext;
        }

        #endregion


        #region Fields
        /// <summary>
        /// Reference to the context for user`s manipulation
        /// </summary>
        public UserContext UserContext { get; }

        #endregion


        #region Methods

        private async  Task<User> PrepareUser(UserDto dto, string roleName)
        {
            var entity = await UserContext.Users.Include(u => u.UserRoles).Where(u => u.Username == dto.Username).FirstOrDefaultAsync();

            // This user already exists
            if (entity != null) return null;

            // Create role if not exists
            var roleEntity = await UserContext.Roles.FirstOrDefaultAsync(r => r.Name == roleName) ?? new Role()
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

            var userEntity = await UserContext.Users.FirstOrDefaultAsync(c => c.Username == userDto.Username);

            // check if username exists
            if (userEntity == null)
                return null;

            return !CryptographyHelper.VerifyPasswordHash(userDto.Password, userEntity.PasswordHash, userEntity.PasswordSalt) ? null : userEntity;

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
            UserContext.Users.Add(await PrepareUser(dto, "Admin"));

            // Save changes to the database
            await UserContext.SaveChangesAsync();

            // Returns user
            return await UserContext.Users.Where(u=>u.Username == username).LastOrDefaultAsync();
        }


        #endregion


        
    }
}
