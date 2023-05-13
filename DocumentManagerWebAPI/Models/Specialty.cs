using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class Specialty
{
    public int SpecialtyId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Name { get; set; } = null!;
    
    
    
    public int FacultyId { get; set; }
}