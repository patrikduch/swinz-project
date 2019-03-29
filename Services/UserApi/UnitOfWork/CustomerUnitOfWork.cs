//-----------------------------------------------------------------------
// <copyright file="CustomerUnitOfWork.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.UnitOfWork
{
    using System.Threading.Tasks;
    using PersistenceLib;
    using Contexts;
    using UserApi.Interfaces.Repositories;
    using UserApi.Interfaces.UnitOfWork;

    /// <summary>
    /// Unit of work for customer`s manipulation
    /// </summary>
    public class CustomerUnitOfWork : ICustomerUnitOfWork
    {
        /// <summary>
        /// Reference to the database context for handling user`s manipulation
        /// </summary>
        private readonly UserContext _userContext;

        /// <summary>
        /// Creating new instance of customers unit of work
        /// </summary>
        /// <param name="userContext">Context for user`s manipulation</param>
        /// <param name="customerRepository">Repository for all customer`s operations</param>
        /// <param name="userRepository">Repository for all user`s operations</param>
        public CustomerUnitOfWork(UserContext userContext, ICustomerRepository customerRepository, IUserRepository userRepository)
        {
            _userContext = userContext;
            // Services initialization
            CustomerRepository = customerRepository;
            UserRepository = userRepository;
        }

        /// <summary>
        /// Dispose unmanaged resources (Database connection)
        /// </summary>
        public void Dispose()
        {
            _userContext.Dispose();
        }

        /// <summary>
        /// Save changes on the Customer context
        /// </summary>
        /// <returns></returns>
        Task<int> IUnitOfWork.Complete()
        {
            return _userContext.SaveChangesAsync();
        }

        public ICustomerRepository CustomerRepository { get; }
        public IUserRepository UserRepository { get; }
    }
}
    
