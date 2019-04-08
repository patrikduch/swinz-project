


using OrderApi.Interfaces.Repositories;

namespace OrderApi.Interfaces.UnitOfWork
{
    using PersistenceLib;

    public interface IOrderUnitOfWork : IUnitOfWork
    {
        IOrderRepository OrderRepository { get; }
    }
}
