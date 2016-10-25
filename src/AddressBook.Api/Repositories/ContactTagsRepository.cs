using AddressBook.Api.Dto;
using AddressBook.Api.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBook.Api.Repositories
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Repositories.ICrudOperationsRepository{Models.TagsModel}" />
    /// <seealso cref="System.IDisposable" />
    public class ContactTagsRepository : ICrudOperationsRepository<ContactTagsDto>,IDisposable
    {
        /// <summary>
        /// The connection string
        /// </summary>
        private readonly string connectionString;
        /// <summary>
        /// Initializes a new instance of the <see cref="ContactTagsRepository"/> class.
        /// </summary>
        public ContactTagsRepository(string connectionstring = "")
        {
            if (string.IsNullOrEmpty(connectionString))
            {
                connectionString = Startup.ConnectionString;

            }
            else
            {
                connectionString = connectionstring;
            }

        }




    /// <summary>
    /// Gets the connection.
    /// </summary>
    /// <value>
    /// The connection.
    /// </value>
    public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(connectionString);
            }
        }



        /// <summary>
        /// Deletes the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public bool Delete(ContactTagsDto entity)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Inserts the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public bool Insert(ContactTagsDto entity)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Updates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public bool Update(ContactTagsDto entity)
        {
            throw new NotImplementedException();
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~ContactTagsRepository() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        #endregion
    }
}
