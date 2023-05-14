using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DocumentManagerWebAPI.Models;

public class Application : ICreatedAt
{
    public int ApplicationId { get; set; }
    
    public string? Comment { get; set; }

    [Required]
    [Column(TypeName = "JSONB")]
    public string Content { get; set; } = null!;
    
    public DateTime CreatedAt { get; set; }
    
    
    
    public int StudentId { get; set; }
    
    public int StatusId { get; set; }
    
    public int TemplateId { get; set; }
}