using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class Employee
{
    public int EmployeeId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Name { get; set; } = null!;

    [Required]
    [MaxLength(256)]
    public string Surname { get; set; } = null!;

    [Required]
    [Phone]
    [MaxLength(16)]
    public string PhoneNumber { get; set; } = null!;

    [Required]
    [MaxLength(256)]
    public string Position { get; set; } = null!;

    [Required]
    [MaxLength(256)]
    public string WorkbookNumber { get; set; } = null!;
    
    
    
    public int AccountId { get; set; }
    
    public int FacultyId { get; set; }
}