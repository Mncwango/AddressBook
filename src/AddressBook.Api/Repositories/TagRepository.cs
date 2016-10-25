using AddressBook.Api.Dto;
using AddressBook.Api.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using PubNubMessaging.Core;
using AddressBook.Api.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace AddressBook.Api.Repositories
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="AddressBook.Api.Repositories.ICrudOperationsRepository{AddressBook.Api.Models.TagsModel}" />
    /// <seealso cref="System.IDisposable" />
    public class TagRepository : ICrudOperationsRepository<TagsDto>, IDisposable

    {
        private readonly string connectionString;

        /// <summary>
        /// Initializes a new instance of the <see cref="TagRepository"/> class.
        /// </summary>
        /// <param name="connectionstring">The connectionstring.</param>
        public TagRepository(string connectionstring = "")
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

        public IConfigurationRoot Configuration { get; }

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
        public bool Delete(TagsDto entity)
        {
           using(IDbConnection dbConnection = Connection)
            {
                var results = dbConnection.Query("spDeleteTag", new { Id = entity.Id }, commandType: CommandType.StoredProcedure);
                return true;
            }
        }

        /// <summary>
        /// Inserts the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public bool Insert([FromBody]TagsDto entity)
        {
            using (IDbConnection dbConnection = Connection)
            {
                var results = dbConnection.Execute("INSERT INTO Tags(Name) VALUES(@Name)", new TagsDto { Name = entity.Name });
                if (results > 0) TagPublishService.PublishNewTag(entity.Name);
                return results > 0 ? true : false;
            }
        }

        /// <summary>
        /// Updates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public bool Update([FromBody]TagsDto entity)
        {
            using (IDbConnection dbConnection = Connection)
            {
                var results = dbConnection.Execute("UPDATE Tags SET Name = @Name WHERE Id = @Id", new {Name =entity.Name, Id = entity.Id });
                return results > 0 ? true : false;
            }
        }


        /// <summary>
        /// Gets the tags.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<TagsModel> GetTags()
        {
            using (IDbConnection dbConnection = Connection)
            {
                return dbConnection.Query<TagsModel>("SELECT * FROM Tags").ToList();
            }
        }

        /// <summary>
        /// Gets the name of the tags by.
        /// </summary>
        /// <param name="TagName">Name of the tag.</param>
        /// <returns></returns>
        public IEnumerable<TagsModel> GetTagsByName(string TagName)
        {
            using (IDbConnection dbConnection = Connection)
            {
                return dbConnection.Query<TagsModel>("SELECT * FROM Tags T WHERE T.Name LIKE @TagName+'%'", new { TagName = TagName }).ToList();
            }
        }


        /// <summary>
        /// Gets the contacts tags.
        /// </summary>
        /// <param name="ContactId">The contact identifier.</param>
        /// <returns></returns>
        public IEnumerable<TagsModel> GetContactsTags(int ContactId)
        {
            using (var dbConnection = Connection)
            {

                return dbConnection.Query<TagsModel>("SELECT DISTINCT(T.Id) [Id],T.Name [Name] FROM ContactTags CT INNER JOIN Tags T ON CT.TagId = T.Id WHERE CT.ContactId = @Id", new { Id = ContactId }).ToList();
            }
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
        // ~TagRepository() {
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
