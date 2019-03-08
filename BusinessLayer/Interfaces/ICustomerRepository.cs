using System.Collections.Generic;
using BusinessLayer.Models;

namespace BusinessLayer.Interfaces
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetAllCustomers();
    }
}
