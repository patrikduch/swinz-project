using Microsoft.EntityFrameworkCore.Migrations;

namespace CustomerApi.Migrations
{
    public partial class CustomerSeedInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Sql query for initialization
            migrationBuilder.Sql("INSERT INTO [dbo].[Customers] VALUES ('Patrik', 'Duch')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
