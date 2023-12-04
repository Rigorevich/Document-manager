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
            
            modelBuilder
                .Entity<Faculty>()
                .HasData(
                    new ()
                    {
                        FacultyId = 1,
                        Name = "ФКП"
                    },
                    new ()
                    {
                        FacultyId = 2,
                        Name = "ИЭФ"
                    },
                    new ()
                    {
                        FacultyId = 3,
                        Name = "КСИС"
                    });

            modelBuilder
                .Entity<Specialty>()
                .HasData(new ()
                    {
                        SpecialtyId = 1,
                        FacultyId = 1,
                        Name = "ИПОИТ"
                    },
                    new ()
                    {
                        SpecialtyId = 2,
                        FacultyId = 1,
                        Name = "ИСиТ (в ОПБ)"
                    },
                    new ()
                    {
                        SpecialtyId = 3,
                        FacultyId = 1,
                        Name = "ИСиТ (в БМ)"
                    },
                    new ()
                    {
                        SpecialtyId = 4,
                        FacultyId = 2,
                        Name = "ИСиТ (в Логистике)"
                    },
                    new ()
                    {
                        SpecialtyId = 5,
                        FacultyId = 2,
                        Name = "ИСиТ (в Экономике)"
                    },
                    new ()
                    {
                        SpecialtyId = 6,
                        FacultyId = 3,
                        Name = "ПОИТ"
                    },
                    new ()
                    {
                        SpecialtyId = 7,
                        FacultyId = 3,
                        Name = "ВМСиС"
                    });

            modelBuilder
                .Entity<Group>()
                .HasData(new Group
                    {
                        GroupId = 1,
                        SpecialtyId = 1,
                        Year = 2021,
                        GroupNumber = "110901",
                        Tutor = "Коркин"
                    },
                    new Group
                    {
                        GroupId = 2,
                        SpecialtyId = 1,
                        Year = 2021,
                        GroupNumber = "110902",
                        Tutor = "Борисик"
                    },
                    new Group
                    {
                        GroupId = 3,
                        SpecialtyId = 2,
                        Year = 2021,
                        GroupNumber = "110101",
                        Tutor = "Кот Борис"
                    },
                    new Group
                    {
                        GroupId = 4,
                        SpecialtyId = 3,
                        Year = 2021,
                        GroupNumber = "114002",
                        Tutor = "Пол Уокер"
                    },
                    new Group
                    {
                        GroupId = 5,
                        SpecialtyId = 4,
                        Year = 2021,
                        GroupNumber = "123456",
                        Tutor = "Алексей Суховаров"
                    },
                    new Group
                    {
                        GroupId = 6,
                        SpecialtyId = 5,
                        Year = 2021,
                        GroupNumber = "123455",
                        Tutor = "Вин Дизель"
                    },
                    new Group
                    {
                        GroupId = 7,
                        SpecialtyId = 6,
                        Year = 2021,
                        GroupNumber = "112334",
                        Tutor = "Вин Бензин"
                    },
                    new Group
                    {
                        GroupId = 8,
                        SpecialtyId = 7,
                        Year = 2021,
                        GroupNumber = "122334",
                        Tutor = "Вин Газ"
                    },
                    new Group
                    {
                        GroupId = 9,
                        SpecialtyId = 6,
                        Year = 2021,
                        GroupNumber = "122334",
                        Tutor = "Вин Код"
                    });

            modelBuilder
                .Entity<Account>()
                .HasData(new Account
                    {
                        AccountId = 1,
                        Login = "admin",
                        Password = "admin",
                        Role = "admin"
                    });

            modelBuilder
                .Entity<Administrator>()
                .HasData(new Administrator
                {
                    AdministratorId = 1,
                    AccountId = 1,
                    Name = "Марина",
                    Surname = "Борисик",
                    PhoneNumber = "+375172938824"
                });

            modelBuilder
                .Entity<Status>()
                .HasData(new Status
                    {
                        StatusId = 1,
                        Name = "В обработке"
                    },
                    new Status
                    {
                        StatusId = 2,
                        Name = "Напечатано"
                    },
                    new Status
                    {
                        StatusId = 3,
                        Name = "Отклонено"
                    });
            
            modelBuilder.Entity<Account>(b =>
            {
                b.HasIndex(a => a.Login)
                    .IsUnique();
            });
            
            modelBuilder.Entity<Administrator>(b =>
            {
                b.HasOne<Account>()
                    .WithOne()
                    .HasForeignKey<Administrator>(a => a.AccountId);
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
                    .WithOne()
                    .HasForeignKey<Employee>(s => s.AccountId);

                b.HasOne<Faculty>()
                    .WithMany()
                    .HasForeignKey(e => e.FacultyId);
            });
            
            modelBuilder.Entity<Student>(b =>
            {
                b.HasOne<Account>()
                    .WithOne()
                    .HasForeignKey<Student>(s => s.AccountId);
                
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

        
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            var entries = this.ChangeTracker.Entries();
            foreach (var entry in entries)
            {
                if (entry.State == EntityState.Added && entry.Entity is ICreatedAt createdAt)
                {
                    createdAt.CreatedAt = DateTime.Now;
                }
                
                if ((entry.State == EntityState.Modified || entry.State == EntityState.Added) && entry.Entity is IUpdatedAt updatedAt)
                {
                    updatedAt.UpdatedAt = DateTime.Now;
                }
                
            }
            
            return base.SaveChangesAsync(cancellationToken);
        }

        public DbSet<DocumentManagerWebAPI.Models.Account>? Account { get; set; }

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
