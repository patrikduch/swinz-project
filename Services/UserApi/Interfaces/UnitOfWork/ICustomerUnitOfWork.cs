namespace UserApi.Interfaces.UnitOfWork
{
    using System.Threading.Tasks;
    using PersistenceLib;
    using Dto.Customers;

    public interface ICustomerUnitOfWork : IUnitOfWork
    {
        ICustomerRepository CustomerRepository { get; }
    }
}
