using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class Application : ICreatedAt
{
    public int Id { get; set; }
    
    public string? Comment { get; set; }

    [Required]
    [DataType("JSONB")]
    public string Content { get; set; } = null!;
    
    public DateTime CreatedAt { get; set; }
    
    
    
    public int StudentId { get; set; }
    
    public int StatusId { get; set; }
    
    public int TemplateId { get; set; }
}