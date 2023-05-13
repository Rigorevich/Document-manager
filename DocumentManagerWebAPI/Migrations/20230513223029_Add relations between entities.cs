using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DocumentManagerWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class Addrelationsbetweenentities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Student_AccountId",
                table: "Student",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_Student_GroupId",
                table: "Student",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Specialty_FacultyId",
                table: "Specialty",
                column: "FacultyId");

            migrationBuilder.CreateIndex(
                name: "IX_Group_SpecialtyId",
                table: "Group",
                column: "SpecialtyId");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_AccountId",
                table: "Employee",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_FacultyId",
                table: "Employee",
                column: "FacultyId");

            migrationBuilder.CreateIndex(
                name: "IX_Application_StatusId",
                table: "Application",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Application_StudentId",
                table: "Application",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Application_TemplateId",
                table: "Application",
                column: "TemplateId");

            migrationBuilder.CreateIndex(
                name: "IX_Administrator_AccountId",
                table: "Administrator",
                column: "AccountId");

            migrationBuilder.AddForeignKey(
                name: "FK_Administrator_Account_AccountId",
                table: "Administrator",
                column: "AccountId",
                principalTable: "Account",
                principalColumn: "AccountId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Application_Status_StatusId",
                table: "Application",
                column: "StatusId",
                principalTable: "Status",
                principalColumn: "StatusId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Application_Student_StudentId",
                table: "Application",
                column: "StudentId",
                principalTable: "Student",
                principalColumn: "StudentId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Application_Template_TemplateId",
                table: "Application",
                column: "TemplateId",
                principalTable: "Template",
                principalColumn: "TemplateId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Employee_Account_AccountId",
                table: "Employee",
                column: "AccountId",
                principalTable: "Account",
                principalColumn: "AccountId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Employee_Faculty_FacultyId",
                table: "Employee",
                column: "FacultyId",
                principalTable: "Faculty",
                principalColumn: "FacultyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Group_Specialty_SpecialtyId",
                table: "Group",
                column: "SpecialtyId",
                principalTable: "Specialty",
                principalColumn: "SpecialtyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Specialty_Faculty_FacultyId",
                table: "Specialty",
                column: "FacultyId",
                principalTable: "Faculty",
                principalColumn: "FacultyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Student_Account_AccountId",
                table: "Student",
                column: "AccountId",
                principalTable: "Account",
                principalColumn: "AccountId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Student_Group_GroupId",
                table: "Student",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "GroupId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Administrator_Account_AccountId",
                table: "Administrator");

            migrationBuilder.DropForeignKey(
                name: "FK_Application_Status_StatusId",
                table: "Application");

            migrationBuilder.DropForeignKey(
                name: "FK_Application_Student_StudentId",
                table: "Application");

            migrationBuilder.DropForeignKey(
                name: "FK_Application_Template_TemplateId",
                table: "Application");

            migrationBuilder.DropForeignKey(
                name: "FK_Employee_Account_AccountId",
                table: "Employee");

            migrationBuilder.DropForeignKey(
                name: "FK_Employee_Faculty_FacultyId",
                table: "Employee");

            migrationBuilder.DropForeignKey(
                name: "FK_Group_Specialty_SpecialtyId",
                table: "Group");

            migrationBuilder.DropForeignKey(
                name: "FK_Specialty_Faculty_FacultyId",
                table: "Specialty");

            migrationBuilder.DropForeignKey(
                name: "FK_Student_Account_AccountId",
                table: "Student");

            migrationBuilder.DropForeignKey(
                name: "FK_Student_Group_GroupId",
                table: "Student");

            migrationBuilder.DropIndex(
                name: "IX_Student_AccountId",
                table: "Student");

            migrationBuilder.DropIndex(
                name: "IX_Student_GroupId",
                table: "Student");

            migrationBuilder.DropIndex(
                name: "IX_Specialty_FacultyId",
                table: "Specialty");

            migrationBuilder.DropIndex(
                name: "IX_Group_SpecialtyId",
                table: "Group");

            migrationBuilder.DropIndex(
                name: "IX_Employee_AccountId",
                table: "Employee");

            migrationBuilder.DropIndex(
                name: "IX_Employee_FacultyId",
                table: "Employee");

            migrationBuilder.DropIndex(
                name: "IX_Application_StatusId",
                table: "Application");

            migrationBuilder.DropIndex(
                name: "IX_Application_StudentId",
                table: "Application");

            migrationBuilder.DropIndex(
                name: "IX_Application_TemplateId",
                table: "Application");

            migrationBuilder.DropIndex(
                name: "IX_Administrator_AccountId",
                table: "Administrator");
        }
    }
}
