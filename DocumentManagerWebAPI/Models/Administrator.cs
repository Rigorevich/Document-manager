using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class Administrator
{
    public int AdministratorId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Name { get; set; } = null!;

    [Required]
    [MaxLength(256)]
    public string Surname { get; set; } = null!;

    [Required]
    [Phone]
    public string PhoneNumber { get; set; } = null!;
    
    
    
    public int AccountId { get; set; }
}