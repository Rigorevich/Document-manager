using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class Account
{
    public int AccountId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Login { get; set; } = null!;

    [Required]
    [MaxLength(256)]
    public string Password { get; set; } = null!;

    [Required]
    [MaxLength(256)]
    public string Role { get; set; } = null!;
}