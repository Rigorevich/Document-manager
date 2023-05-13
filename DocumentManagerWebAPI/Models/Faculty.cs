using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class Faculty
{
    public int FacultyId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Name { get; set; } = null!;
}