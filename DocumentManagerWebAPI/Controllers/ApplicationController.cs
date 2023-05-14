using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DocumentManagerWebAPI.Data;
using DocumentManagerWebAPI.Models;

namespace DocumentManagerWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        private readonly DocumentManagerContext _context;

        public ApplicationController(DocumentManagerContext context)
        {
            _context = context;
        }

        // GET: api/Application
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<IEnumerable<Application>>> GetApplication()
        {
          if (_context.Application == null)
          {
              return NotFound();
          }
          return await _context.Application.ToListAsync();
        }

        // GET: api/Application/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<Application>> GetApplication(int id)
        {
          if (_context.Application == null)
          {
              return NotFound();
          }
          var application = await _context.Application.FindAsync(id);

          if (application == null)
          {
              return NotFound();
          }

          return application;
        }

        // PUT: api/Application/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> PutApplication(int id, Application application)
        {
            if (id != application.ApplicationId)
            {
                return BadRequest();
            }

            _context.Entry(application).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplicationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Application
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Application>> PostApplication(Application application)
        {
          if (_context.Application == null)
          {
              return Problem("Entity set 'DocumentManagerContext.Application'  is null.");
          }
          _context.Application.Add(application);
          await _context.SaveChangesAsync();

          return CreatedAtAction("GetApplication", new { id = application.ApplicationId }, application);
        }

        // DELETE: api/Application/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> DeleteApplication(int id)
        {
            if (_context.Application == null)
            {
                return NotFound();
            }
            var application = await _context.Application.FindAsync(id);
            if (application == null)
            {
                return NotFound();
            }

            _context.Application.Remove(application);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ApplicationExists(int id)
        {
            return (_context.Application?.Any(e => e.ApplicationId == id)).GetValueOrDefault();
        }
    }
}
