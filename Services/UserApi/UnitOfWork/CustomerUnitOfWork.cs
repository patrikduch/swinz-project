using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using PersistenceLib;
using UserApi.Contexts;
using UserApi.Interfaces;
using UserApi.Interfaces.UnitOfWork;

namespace UserApi.UnitOfWork
{
    public class CustomerUnitOfWork : ICustomerUnitOfWork
    {
        private UserContext _userContext;

        public CustomerUnitOfWork(UserContext userContext, ICustomerRepository customerRepository)
        {
            _userContext = userContext;
            CustomerRepository = customerRepository;
        }

        public void Dispose()
        {
            //_userContext.Dispose();
        }

        public int Complete()
        {
            return _userContext.SaveChanges();
        }

        public ICustomerRepository CustomerRepository { get; private set; }
        }
}
    
