using AAddressBook.Api.Dto;
using AddressBook.Api.Models;
using AddressBook.Api.Repositories;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBook.Api.Dto
{
    /// <summary>
    /// 
    /// </summary>
    public class ContactsRepository: ICrudOperationsRepository<ContactsDto>,IDisposable
    {
        private readonly string connectionString;
        /// <summary>
        /// Initializes a new instance of the <see cref="ContactsRepository"/> class.
        /// </summary>
        public ContactsRepository()
        {

            connectionString = Startup.ConnectionString;
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
        /// Gets the contacts by.
        /// </summary>
        /// <param name="FirstName">The first name.</param>
        /// <param name="LastName">The last name.</param>
        /// <param name="CompanyName">Name of the company.</param>
        /// <param name="TagName">Name of the tag.</param>
        /// <param name="searchType">Type of the search.</param>
        /// <returns></returns>
        public IEnumerable<ContactsSearchResultsModel> GetContactsBy(string Phrase)
        {
           var lstResults = new List<ContactsSearchResultsModel>();
            using (IDbConnection dbConnection = Connection)
            {
                var contacts = dbConnection.Query<ContactsSearchResultsModel>("spSearchContacts", new { Phrase = Phrase}, commandType: CommandType.StoredProcedure).ToList();
                
                
                foreach (var contact in contacts)
                {
                    
                    using (var T = new TagRepository())
                    {
                        var contactTag = T.GetContactsTags(contact.Id);
                        contact.Tags = contactTag.ToList();
                        lstResults.Add(contact);
                    }
                }

                
            }
            return lstResults;
        }

       public bool Insert(ContactsDto entity)
        {
            throw new NotImplementedException();
        }

        public bool Update(ContactsDto entity)
        {
            throw new NotImplementedException();
        }

        public bool Delete(ContactsDto entity)
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
        // ~ContactsRepository() {
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
    /// <summary>
    /// 
    /// </summary>
    public enum SearchType
    {
        /// <summary>
        /// The general
        /// </summary>
        General =0,
        /// <summary>
        /// The tag name
        /// </summary>
        TagName =1

    }
}
