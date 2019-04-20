
namespace OrderApi.UnitOfWork
{
    using System.Threading.Tasks;
    using Contexts;
    using OrderApi.Interfaces.Repositories;
    using OrderApi.Interfaces.UnitOfWork;

    /// <summary>
    /// 
    /// </summary>
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


        /// <summary>
        /// 
        /// </summary>
        /// <param name="productContext"></param>
        /// <param name="orderRepository"></param>
        public OrderUnitOfWork(ProductContext productContext, IOrderRepository orderRepository)
        {
            _productContext = productContext;
            OrderRepository = orderRepository;

        }

        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            _productContext.Dispose();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public async Task<int> Complete()
        {
            return await _productContext.SaveChangesAsync();
        }
    }
}
