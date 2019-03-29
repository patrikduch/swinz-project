using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using PersistenceLib;
using UserApi.Contexts;
using UserApi.Interfaces;
using UserApi.Interfaces.Repositories;
using UserApi.Interfaces.UnitOfWork;

namespace UserApi.UnitOfWork
{
    public class CustomerUnitOfWork : ICustomerUnitOfWork
    {
        private readonly UserContext _userContext;

        public CustomerUnitOfWork(UserContext userContext, ICustomerRepository customerRepository, IUserRepository userRepository)
        {
            _userContext = userContext;
            // Services initialization
            CustomerRepository = customerRepository;
            UserRepository = userRepository;
        }

        public void Dispose()
        {
            _userContext.Dispose();
        }

        Task<int> IUnitOfWork.Complete()
        {
            return _userContext.SaveChangesAsync();
        }

        public ICustomerRepository CustomerRepository { get; private set; }
        public IUserRepository UserRepository { get; private set; }
    }
}
    
