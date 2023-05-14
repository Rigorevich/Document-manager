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
    public class AccountController : ControllerBase
    {
        private readonly DocumentManagerContext _context;

        public AccountController(DocumentManagerContext context)
        {
            _context = context;
        }

        // GET: api/Account
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<IEnumerable<Account>>> GetAccount()
        {
          if (_context.Account == null)
          {
              return NotFound();
          }
          return await _context.Account.ToListAsync();
        }

        // GET: api/Account/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<Account>> GetAccount(int id)
        {
          if (_context.Account == null)
          {
              return NotFound();
          }
          var account = await _context.Account.FindAsync(id);

          if (account == null)
          {
              return NotFound();
          }

          return account;
        }

        // PUT: api/Account/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> PutAccount(int id, Account account)
        {
            if (id != account.AccountId)
            {
                return BadRequest();
            }

            _context.Entry(account).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
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

        // POST: api/Account
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Account>> PostAccount(Account account)
        {
          if (_context.Account == null)
          {
              return Problem("Entity set 'DocumentManagerContext.Account'  is null.");
          }

          if (await _context.Account.AnyAsync(a => a.Login == account.Login))
          {
              return Conflict($"Login '{account.Login}' is already taken.");
          }
          
          _context.Account.Add(account);
          await _context.SaveChangesAsync();

          return CreatedAtAction("GetAccount", new { id = account.AccountId }, account);
        }
        
        // POST: api/Account/login
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpPost("login")]
        public async Task<ActionResult<Account>> Login([FromBody]LoginForm login)
        {
            if (_context.Account == null)
            {
                return Problem("Entity set 'DocumentManagerContext.Account'  is null.");
            }

            var account = await _context.Account
                .Where(a => a.Login == login.Login && a.Password == login.Password)
                .SingleOrDefaultAsync();

            if (account == null)
            {
                return NotFound("Invalid login or password");
            }

            return Ok(account);
        }

        // DELETE: api/Account/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            if (_context.Account == null)
            {
                return NotFound();
            }
            var account = await _context.Account.FindAsync(id);
            if (account == null)
            {
                return NotFound();
            }

            _context.Account.Remove(account);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccountExists(int id)
        {
            return (_context.Account?.Any(e => e.AccountId == id)).GetValueOrDefault();
        }
    }
}
