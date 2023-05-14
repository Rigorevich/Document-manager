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
    public class AdministratorController : ControllerBase
    {
        private readonly DocumentManagerContext _context;

        public AdministratorController(DocumentManagerContext context)
        {
            _context = context;
        }

        // GET: api/Administrator
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<IEnumerable<Administrator>>> GetAdministrator()
        {
          if (_context.Administrator == null)
          {
              return NotFound();
          }
          return await _context.Administrator.ToListAsync();
        }

        // GET: api/Administrator/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<Administrator>> GetAdministrator(int id)
        {
          if (_context.Administrator == null)
          {
              return NotFound();
          }
          var administrator = await _context.Administrator.FindAsync(id);

          if (administrator == null)
          {
              return NotFound();
          }

          return administrator;
        }

        // PUT: api/Administrator/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> PutAdministrator(int id, Administrator administrator)
        {
            if (id != administrator.AdministratorId)
            {
                return BadRequest();
            }

            _context.Entry(administrator).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdministratorExists(id))
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

        // POST: api/Administrator
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Administrator>> PostAdministrator(Administrator administrator)
        {
          if (_context.Administrator == null)
          {
              return Problem("Entity set 'DocumentManagerContext.Administrator'  is null.");
          }
          _context.Administrator.Add(administrator);
          await _context.SaveChangesAsync();

          return CreatedAtAction("GetAdministrator", new { id = administrator.AdministratorId }, administrator);
        }

        // DELETE: api/Administrator/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> DeleteAdministrator(int id)
        {
            if (_context.Administrator == null)
            {
                return NotFound();
            }
            var administrator = await _context.Administrator.FindAsync(id);
            if (administrator == null)
            {
                return NotFound();
            }

            _context.Administrator.Remove(administrator);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AdministratorExists(int id)
        {
            return (_context.Administrator?.Any(e => e.AdministratorId == id)).GetValueOrDefault();
        }
    }
}
