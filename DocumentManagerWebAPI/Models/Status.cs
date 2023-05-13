using System.ComponentModel.DataAnnotations;

namespace DocumentManagerWebAPI.Models;

public class Status
{
    public int StatusId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Name { get; set; } = null!;
}