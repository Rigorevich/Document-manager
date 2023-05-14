using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class LoginForm
{
    [Required]
    [MaxLength(256)]
    public string Login { get; set; } = null!;

    [Required]
    [MaxLength(256)]
    public string Password { get; set; } = null!;
}