//-----------------------------------------------------------------------
// <copyright file="ProductController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

using OrderApi.Dto;

namespace OrderApi.Controllers
{
    using System.Linq;
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
        /// <param name="unitOfWork">Injection interface of productDto unit of work.</param>
        public ProductController(IProductUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        /// <summary>
        /// Creation of new productDto
        /// </summary>
        /// <param name="product">Entity object that encapsulates productDto details</param>
        /// <returns></returns>
        [Route("create")]
        [HttpPost]
        public async Task<ActionResult> CreateProduct([FromBody] Product product)
        {
            if (product.Name.Equals(string.Empty) || product.Price == 0)
            {
                return BadRequest("Incorrect input");
            }

            var entity = new Product
            {
                Id = _unitOfWork.ProductRepository.GetLast() == null ? 1 : _unitOfWork.ProductRepository.GetLast().Id + 1,
                Name = product.Name,
                Price = product.Price

            };

            _unitOfWork.ProductRepository.Add(entity);
        
            await _unitOfWork.Complete();

            return Ok(entity);
        }

        /// <summary>
        /// GetAllOrders all products without restrictions
        /// </summary>
        /// <returns></returns>
        [Route("getAll")]
        [HttpGet]
        public async Task<IEnumerable<Product>> GetAll()
        {
            return await _unitOfWork.ProductRepository.GetAll();
        }


        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Route("getAllPager")]
        [HttpPost]
        public async Task<IEnumerable<Product>> GetAllWithPagination([FromBody] ProductPagerDto productDto)
        {
            return await _unitOfWork.ProductRepository.GetProductsWithPagination(productDto.PageIdentifier);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Route("paginationInfo")]
        [HttpGet]
        public ActionResult<ProductPagerDto> GetProductPagination()
        {
            return Ok(_unitOfWork.ProductRepository.GetProductPaginationInfo());
        }



        /// <summary>
        /// Update productDto by identifier number
        /// </summary>
        /// <param name="productDto"></param>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("update/{id}")]
        [HttpPut]
        public async Task<ActionResult> UpdateProduct(int id, [FromBody] Product productDto)
        {
            if (productDto.Name.Equals(string.Empty) || productDto.Price == 0)
            {
                return BadRequest("Incorrect input");
            }

            // GetAllOrders entity by provided identifier
            var entity = await _unitOfWork.ProductRepository.Get(id);

            if (entity == null) return BadRequest("Entity to update wasn't founded");

            // Edit fetched object
            entity.Name = productDto.Name;
            entity.Price = productDto.Price;

            // Save changes
            await _unitOfWork.Complete();

            // Return newly updated product
            return Ok(productDto);
        }

        /// <summary>
        /// Remove customer by id
        /// </summary>
        /// <param name="id">customer identifier</param>
        /// <returns></returns>
        [Route("delete/{id}")]
        [HttpDelete]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var productEntity = (_unitOfWork.ProductRepository.Find(c => c.Id == id)).SingleOrDefault();

            if (productEntity == null) return BadRequest("Entity to delete wasn't founded");

            productEntity.IsDeleted = true;

            await _unitOfWork.Complete();

            return Ok(productEntity);

        }
    }
}
