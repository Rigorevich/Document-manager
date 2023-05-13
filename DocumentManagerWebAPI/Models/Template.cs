using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class Template : ICreatedAt, IUpdatedAt
{
    public int TemplateId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Name { get; set; } = null!;

    [Required]
    [MaxLength(1024)]
    public string Description { get; set; } = null!;

    [Required]
    [DataType("JSONB")]
    public string Form { get; set; } = null!;
    
    public string? TemplateHtml { get; set; }
    
    public DateTime CreatedAt { get; set; }
    
    public DateTime UpdatedAt { get; set; }
}