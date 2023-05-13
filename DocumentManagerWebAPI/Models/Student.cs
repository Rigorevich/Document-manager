using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class Student
{
    public int StudentId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Name { get; set; } = null!;

    [Required]
    [MaxLength(256)]
    public string Surname { get; set; } = null!;

    [Required]
    [Phone]
    public string PhoneNumber { get; set; } = null!;

    [Required]
    [MaxLength(256)]
    public string StudentCardId { get; set; } = null!;
    
    
    
    public int AccountId { get; set; }
    
    public int GroupId { get; set; }
}