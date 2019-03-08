using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Protocols;

namespace BusinessLayer
{
    /// <summary>
    /// Represents a MS SQL Database.
    /// </summary>
    public class Database
    {
        public SqlConnection Connection { get; set; }
        private SqlTransaction SqlTransaction { get; set; }
        public string Language { get; set; }

        #region Constructors

        public Database()
        {
            Connection = new SqlConnection();
            Language = "en";
        }


        #endregion

        #region Methods

        /// <summary>
        /// Connect.
        /// </summary>
        public bool Connect(string conString)
        {
            if (Connection.State != System.Data.ConnectionState.Open)
            {
                Connection.ConnectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Swinz.Database;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"; ;
                Connection.Open();
            }

            return true;

        }

        /// <summary>
        /// Connect.
        /// </summary>
        public bool Connect()
        {
            bool ret = true;
            if (Connection.State != System.Data.ConnectionState.Open)
            {
                // connection string is stored in file App.config or Web.config
                //ret = Connect(ConfigurationManager<>.ConnectionStrings["devConn"].ConnectionString);
            }

            return ret;
        }

        /// <summary>
        /// Close of connection.
        /// </summary>
        public void Close()
        {
            Connection.Close();
        }

        /// <summary>
        /// Begin a transaction.
        /// </summary>
        public void BeginTransaction()
        {
            SqlTransaction = Connection.BeginTransaction(IsolationLevel.Serializable);
        }

        /// <summary>
        /// End a transaction.
        /// </summary>
        public void EndTransaction()
        {
            SqlTransaction.Commit();
            Close();
        }

        /// <summary>
        /// If a transaction is failed call it.
        /// </summary>
        public void Rollback()
        {
            SqlTransaction.Rollback();
        }

        /// <summary>
        /// Insert a record encapulated in the command.
        /// </summary>
        public int ExecuteNonQuery(SqlCommand command)
        {
            int rowNumber = 0;
            try
            {
                rowNumber = command.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return rowNumber;
        }

        /// <summary>
        /// Create command.
        /// </summary>
        public SqlCommand CreateCommand(string strCommand)
        {
            var command = new SqlCommand(strCommand, Connection);

            if (SqlTransaction != null)
            {
                command.Transaction = SqlTransaction;
            }

            return command;
        }

        /// <summary>
        /// Select encapulated in the command.
        /// </summary>
        public SqlDataReader Select(SqlCommand command)
        {
            var sqlReader = command.ExecuteReader();
            return sqlReader;
        }

        #endregion
    }
}