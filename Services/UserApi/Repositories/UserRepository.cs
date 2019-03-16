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
        public Task<List<User>> GetUsers()
        {
            return _context.Users.Include(c => c.UserRoles).ToListAsync();
        }
        #endregion


    }
}
