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
    public class SpecialtyController : ControllerBase
    {
        private readonly DocumentManagerContext _context;

        public SpecialtyController(DocumentManagerContext context)
        {
            _context = context;
        }

        // GET: api/Specialty
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<IEnumerable<Specialty>>> GetSpecialty()
        {
          if (_context.Specialty == null)
          {
              return NotFound();
          }
          return await _context.Specialty.ToListAsync();
        }

        // GET: api/Specialty/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<Specialty>> GetSpecialty(int id)
        {
          if (_context.Specialty == null)
          {
              return NotFound();
          }
          var specialty = await _context.Specialty.FindAsync(id);

          if (specialty == null)
          {
              return NotFound();
          }

          return specialty;
        }

        // PUT: api/Specialty/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> PutSpecialty(int id, Specialty specialty)
        {
            if (id != specialty.SpecialtyId)
            {
                return BadRequest();
            }

            _context.Entry(specialty).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpecialtyExists(id))
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

        // POST: api/Specialty
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Specialty>> PostSpecialty(Specialty specialty)
        {
          if (_context.Specialty == null)
          {
              return Problem("Entity set 'DocumentManagerContext.Specialty'  is null.");
          }
          _context.Specialty.Add(specialty);
          await _context.SaveChangesAsync();

          return CreatedAtAction("GetSpecialty", new { id = specialty.SpecialtyId }, specialty);
        }

        // DELETE: api/Specialty/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> DeleteSpecialty(int id)
        {
            if (_context.Specialty == null)
            {
                return NotFound();
            }
            var specialty = await _context.Specialty.FindAsync(id);
            if (specialty == null)
            {
                return NotFound();
            }

            _context.Specialty.Remove(specialty);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SpecialtyExists(int id)
        {
            return (_context.Specialty?.Any(e => e.SpecialtyId == id)).GetValueOrDefault();
        }
    }
}
