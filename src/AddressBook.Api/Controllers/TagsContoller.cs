using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AddressBook.Api.Models;
using AddressBook.Api.Dto;
using System.Net.Http;
using Microsoft.AspNetCore.Cors;
using AddressBook.Api.Repositories;

namespace AddressBook.Api.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.Controller" />
    [Route("api/[controller]")]
    [EnableCors("AllowAnyOrigin")]
    public class TagsController : Controller
    {

        /// <summary>
        /// Gets the name of the tag.
        /// </summary>
        /// <param name="TagName">Name of the tag.</param>
        /// <returns></returns>
        [AcceptVerbs("Get")]
        [Route("getTagName")]
        [HttpGet("{tagName}")]
        public IActionResult GetTagName(string TagName)
        {
            try
            {

                using (var tagsRepo = new TagRepository())
                {
                    var results = tagsRepo.GetTagsByName(TagName);
                    return Ok(results);
                }
            }
            catch (Exception ex)
            {
                return NotFound(ex);
            }
        }


        /// <summary>
        /// Gets all tags.
        /// </summary>
        /// <returns></returns>
        [AcceptVerbs("Get")]
        [Route("getAllTags")]
        [HttpGet()]
        public IActionResult GetAllTags()
        {
            try
            {

                using (var tagsRepo = new TagRepository())
                {
                    var results = tagsRepo.GetTags();
                    return Ok(results);
                }
            }
            catch (Exception ex)
            {
                return NotFound(ex);
            }
        }

        /// <summary>
        /// Adds the tag.
        /// </summary>
        /// <param name="model">The model.</param>
        /// <returns></returns>
        [AcceptVerbs("Post")]
        [Route("addTag")]
        [HttpPost()]
        public IActionResult AddTag([FromBody]TagsDto model)
        {
            try
            {
                using (var tagsRepo = new TagRepository())
                {
                    var results = tagsRepo.Insert(model);
                    return Ok(results);
                }
            }
            catch (Exception ex)
            {

                return NotFound(ex);
            }
        }

        /// <summary>
        /// Updates the tag.
        /// </summary>
        /// <param name="model">The model.</param>
        /// <returns></returns>
        [AcceptVerbs("Post")]
        [Route("updateTag")]
        [HttpPost()]
        public IActionResult UpdateTag([FromBody]TagsDto model)
        {
            try
            {
                using (var tagsRepo = new TagRepository())
                {
                    var results = tagsRepo.Update(model);
                    return Ok(results);
                }
            }
            catch (Exception ex)
            {

                return NotFound(ex);
            }

        }

        /// <summary>
        /// Deletes the tag.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [AcceptVerbs("Delete")]
        [Route("deleteTag")]
        [HttpDelete()]
        public IActionResult DeleteTag(int id)
        {
            try
            {
                using (var tagsRepo = new TagRepository())
                {
                    var results = tagsRepo.Delete(new TagsDto() {Id = id });
                    return Ok(results);
                }
            }
            catch (Exception ex)
            {

                return NotFound(ex);
            }
        }

      
       
    }
   
}
