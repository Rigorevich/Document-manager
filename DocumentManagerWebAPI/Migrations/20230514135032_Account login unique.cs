using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DocumentManagerWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class Accountloginunique : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Account_Login",
                table: "Account",
                column: "Login",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Account_Login",
                table: "Account");
        }
    }
}
