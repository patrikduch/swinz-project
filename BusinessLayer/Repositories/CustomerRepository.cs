//---------------------------------------------------------------------------------
// <copyright file="CustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//---------------------------------------------------------------------------------

using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using BusinessLayer.Interfaces;
using BusinessLayer.Models;

namespace BusinessLayer.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        #region Fields
        /// <summary>
        /// Instance of MSQL database
        /// </summary>
        private readonly Database _database;
        #endregion

        #region Constructors
        /// <summary>
        /// Default constructor for Mvc repository
        /// </summary>
        public CustomerRepository()
        {
            _database = new Database();
        }

        
        #endregion

        public IEnumerable<Customer> GetAllCustomers()
        {
            // Open connection to the database
            _database.Connect("\"Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Swinz.Database;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False\";");

            SqlCommand procedure = new SqlCommand("pr_GetAllCustomers", _database.Connection);
            procedure.CommandType = CommandType.StoredProcedure;

            SqlDataReader dr = null;
            dr = procedure.ExecuteReader();

            while (dr.Read())
            {
                yield return new Customer
                {
                    Id = int.Parse(dr["id"].ToString()),
                    FirstName = dr["FirstName"].ToString(),
                    Surname = dr["Surname"].ToString()
                };
            }

            _database.Close();
        }

        /// <summary>
        /// Delete customer by its id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async  Task DeleteCustomer(int id)
        {
            // Open connection to the database
            _database.Connect("\"Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Swinz.Database;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False\";");

            SqlCommand procedure = new SqlCommand("pr_DeleteCustomer", _database.Connection);
            procedure.CommandType = CommandType.StoredProcedure;
            procedure.Parameters.AddWithValue("@customerId", id);

            await procedure.ExecuteReaderAsync();

            _database.Close();

        }
    }
}
