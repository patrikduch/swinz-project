//-----------------------------------------------------------------------
// <copyright file="ProductController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace OrderApi.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using OrderApi.Interfaces.UnitOfWork;
    using PersistenceLib.Domains.OrderApi;

    /// <summary>
    /// REST API controller for handling products
    /// </summary>
    [Route("api/products/")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        /// <summary>
        /// Reference of injection interface <seealso cref="IProductUnitOfWork"/>
        /// </summary>
        private readonly IProductUnitOfWork _unitOfWork;

        /// <summary>
        /// Initializes a new instance of the <seealso cref="ProductController"/> class.
        /// </summary>
        /// <param name="unitOfWork">Injection interface of product unit of work.</param>
        public ProductController(IProductUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        /// <summary>
        /// Get all products without restrictions
        /// </summary>
        /// <returns></returns>
        [Route("getAll")]
        [HttpGet]
        public async Task<IEnumerable<Product>> Get()
        {
            return await _unitOfWork.ProductRepository.GetAll();
        }


        [Route("create")]
        [HttpPost]
        public async Task CreateProduct()
        {
            _unitOfWork.ProductRepository.Add(new Product
            {
                Name = "Boruvka"
            });

            await _unitOfWork.Complete();
        }
    }
}
