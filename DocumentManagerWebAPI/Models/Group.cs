using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class Group
{
    public int GroupId { get; set; }
    
    [Required]
    [Range(1,5)]
    public int Year { get; set; }
    
    [Required]
    [MaxLength(256)]
    public string GroupNumber { get; set; } = null!;

    [MaxLength(256)]
    public string? Tutor { get; set; }
    
    
    
    public int SpecialtyId { get; set; }
}