
namespace OrderApi.UnitOfWork
{
    using System.Threading.Tasks;
    using Contexts;
    using OrderApi.Interfaces.Repositories;
    using OrderApi.Interfaces.UnitOfWork;

    public class OrderUnitOfWork: IOrderUnitOfWork
    {

        /// <summary>
        /// Reference to the <seealso cref="ProductContext"/> for managing products.
        /// </summary>
        private readonly ProductContext _productContext;


        /// <summary>
        /// Interface for accessing order repository.
        /// </summary>
        public IOrderRepository OrderRepository { get; }


        public OrderUnitOfWork(ProductContext productContext, IOrderRepository orderRepository)
        {
            _productContext = productContext;
            OrderRepository = orderRepository;

        }

        public void Dispose()
        {
            _productContext.Dispose();
        }

        public async Task<int> Complete()
        {
            return await _productContext.SaveChangesAsync();
        }
    }
}
