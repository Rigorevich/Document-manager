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
    public class TemplateController : ControllerBase
    {
        private readonly DocumentManagerContext _context;

        public TemplateController(DocumentManagerContext context)
        {
            _context = context;
        }

        // GET: api/Template
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Template>>> GetTemplate()
        {
          if (_context.Template == null)
          {
              return NotFound();
          }
          return await _context.Template.ToListAsync();
        }

        // GET: api/Template/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Template>> GetTemplate(int id)
        {
          if (_context.Template == null)
          {
              return NotFound();
          }
          var template = await _context.Template.FindAsync(id);

          if (template == null)
          {
              return NotFound();
          }

          return template;
        }

        // PUT: api/Template/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> PutTemplate(int id, Template template)
        {
            if (id != template.TemplateId)
            {
                return BadRequest();
            }

            _context.Entry(template).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TemplateExists(id))
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

        // POST: api/Template
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Template>> PostTemplate(Template template)
        {
          if (_context.Template == null)
          {
              return Problem("Entity set 'DocumentManagerContext.Template'  is null.");
          }
          _context.Template.Add(template);
          await _context.SaveChangesAsync();

          return CreatedAtAction("GetTemplate", new { id = template.TemplateId }, template);
        }

        // DELETE: api/Template/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> DeleteTemplate(int id)
        {
            if (_context.Template == null)
            {
                return NotFound();
            }
            var template = await _context.Template.FindAsync(id);
            if (template == null)
            {
                return NotFound();
            }

            _context.Template.Remove(template);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TemplateExists(int id)
        {
            return (_context.Template?.Any(e => e.TemplateId == id)).GetValueOrDefault();
        }
    }
}
