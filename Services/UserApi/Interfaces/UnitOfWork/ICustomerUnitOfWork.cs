

using PersistenceLib;

namespace UserApi.Interfaces.UnitOfWork
{
    public interface ICustomerUnitOfWork : IUnitOfWork
    {
        ICustomerRepository CustomerRepository { get; }
    }
}
