using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DocumentManagerWebAPI.Models;

namespace DocumentManagerWebAPI.Data
{
    public class DocumentManagerContext : DbContext
    {
        public DocumentManagerContext (DbContextOptions<DocumentManagerContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Administrator>(b =>
            {
                b.HasOne<Account>()
                    .WithMany()
                    .HasForeignKey(a => a.AccountId);
            });

            modelBuilder.Entity<Specialty>(b =>
            {
                b.HasOne<Faculty>()
                    .WithMany()
                    .HasForeignKey(s => s.FacultyId);
            });
            
            modelBuilder.Entity<Group>(b =>
            {
                b.HasOne<Specialty>()
                    .WithMany()
                    .HasForeignKey(g => g.SpecialtyId);
            });

            modelBuilder.Entity<Employee>(b =>
            {
                b.HasOne<Account>()
                    .WithMany()
                    .HasForeignKey(s => s.AccountId);

                b.HasOne<Faculty>()
                    .WithMany()
                    .HasForeignKey(e => e.FacultyId);
            });
            
            modelBuilder.Entity<Student>(b =>
            {
                b.HasOne<Account>()
                    .WithMany()
                    .HasForeignKey(s => s.AccountId);
                
                b.HasOne<Group>()
                    .WithMany()
                    .HasForeignKey(s => s.GroupId);
            });
            
            modelBuilder.Entity<Application>(b =>
            {
                b.HasOne<Student>()
                    .WithMany()
                    .HasForeignKey(a => a.StudentId);
                
                b.HasOne<Status>()
                    .WithMany()
                    .HasForeignKey(a => a.StatusId);
                
                b.HasOne<Template>()
                    .WithMany()
                    .HasForeignKey(a => a.TemplateId);
            });
        }


        public DbSet<DocumentManagerWebAPI.Models.Account> Account { get; set; } = default!;

        public DbSet<DocumentManagerWebAPI.Models.Administrator>? Administrator { get; set; }

        public DbSet<DocumentManagerWebAPI.Models.Application>? Application { get; set; }

        public DbSet<DocumentManagerWebAPI.Models.Employee>? Employee { get; set; }

        public DbSet<DocumentManagerWebAPI.Models.Faculty>? Faculty { get; set; }

        public DbSet<DocumentManagerWebAPI.Models.Group>? Group { get; set; }

        public DbSet<DocumentManagerWebAPI.Models.Specialty>? Specialty { get; set; }

        public DbSet<DocumentManagerWebAPI.Models.Status>? Status { get; set; }

        public DbSet<DocumentManagerWebAPI.Models.Student>? Student { get; set; }

        public DbSet<DocumentManagerWebAPI.Models.Template>? Template { get; set; }
    }
}
