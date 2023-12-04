using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DocumentManagerWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class Add_initial_data : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "Template",
                type: "timestamp without time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Template",
                type: "timestamp without time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Application",
                type: "timestamp without time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone");

            migrationBuilder.InsertData(
                table: "Account",
                columns: new[] { "AccountId", "Login", "Password", "Role" },
                values: new object[] { 1, "admin", "admin", "admin" });

            migrationBuilder.InsertData(
                table: "Faculty",
                columns: new[] { "FacultyId", "Name" },
                values: new object[,]
                {
                    { 1, "ФКП" },
                    { 2, "ИЭФ" },
                    { 3, "КСИС" }
                });

            migrationBuilder.InsertData(
                table: "Administrator",
                columns: new[] { "AdministratorId", "AccountId", "Name", "PhoneNumber", "Surname" },
                values: new object[] { 1, 1, "Марина", "+375172938824", "Борисик" });

            migrationBuilder.InsertData(
                table: "Specialty",
                columns: new[] { "SpecialtyId", "FacultyId", "Name" },
                values: new object[,]
                {
                    { 1, 1, "ИПОИТ" },
                    { 2, 1, "ИСиТ (в ОПБ)" },
                    { 3, 1, "ИСиТ (в БМ)" },
                    { 4, 2, "ИСиТ (в Логистике)" },
                    { 5, 2, "ИСиТ (в Экономике)" },
                    { 6, 3, "ПОИТ" },
                    { 7, 3, "ВМСиС" }
                });

            migrationBuilder.InsertData(
                table: "Group",
                columns: new[] { "GroupId", "GroupNumber", "SpecialtyId", "Tutor", "Year" },
                values: new object[,]
                {
                    { 1, "110901", 1, "Коркин", 2021 },
                    { 2, "110902", 1, "Борисик", 2021 },
                    { 3, "110101", 2, "Кот Борис", 2021 },
                    { 4, "114002", 3, "Пол Уокер", 2021 },
                    { 5, "123456", 4, "Алексей Суховаров", 2021 },
                    { 6, "123455", 5, "Вин Дизель", 2021 },
                    { 7, "112334", 6, "Вин Бензин", 2021 },
                    { 8, "122334", 7, "Вин Газ", 2021 },
                    { 9, "122334", 6, "Вин Код", 2021 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Administrator",
                keyColumn: "AdministratorId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Group",
                keyColumn: "GroupId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Group",
                keyColumn: "GroupId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Group",
                keyColumn: "GroupId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Group",
                keyColumn: "GroupId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Group",
                keyColumn: "GroupId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Group",
                keyColumn: "GroupId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Group",
                keyColumn: "GroupId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Group",
                keyColumn: "GroupId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Group",
                keyColumn: "GroupId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Account",
                keyColumn: "AccountId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Specialty",
                keyColumn: "SpecialtyId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Specialty",
                keyColumn: "SpecialtyId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Specialty",
                keyColumn: "SpecialtyId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Specialty",
                keyColumn: "SpecialtyId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Specialty",
                keyColumn: "SpecialtyId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Specialty",
                keyColumn: "SpecialtyId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Specialty",
                keyColumn: "SpecialtyId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Faculty",
                keyColumn: "FacultyId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Faculty",
                keyColumn: "FacultyId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Faculty",
                keyColumn: "FacultyId",
                keyValue: 3);

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "Template",
                type: "timestamp with time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Template",
                type: "timestamp with time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Application",
                type: "timestamp with time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone");
        }
    }
}
