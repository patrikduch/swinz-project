using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderApi.Contexts;
using OrderApi.Interfaces.UnitOfWork;
using OrderApi.UnitOfWork;
using PersistenceLib.Domains;

namespace OrderApi.Controllers
{
    [Route("api/products/")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductUnitOfWork _unitOfWork;

        public ProductController(IProductUnitOfWork unitOfWork)
        {

            _unitOfWork = unitOfWork;
        }


        // GET api/values
        [Route("getAll")]
        [HttpGet]
        public async Task<IEnumerable<Product>> Get()
        {
            return await _unitOfWork.ProductRepository.GetAll();

        }

       
    }
}
