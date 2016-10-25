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
    [Route("api/[controller]")]
    [EnableCors("AllowAnyOrigin")]
    public class ContactsController : Controller
    {

        /// <summary>
        /// Searches the contacts by.
        /// </summary>
        /// <param name="Criteria">The criteria.</param>
        /// <returns></returns>
        [AcceptVerbs("Get")]
        [Route("searchBy")]
        [HttpGet("{criteria}")]
        public IActionResult SearchContactsBy(string Criteria)
        {
            try
            {
                
                using (var contactRepo= new ContactsRepository())
                {
                    var results = contactRepo.GetContactsBy(Criteria);
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
