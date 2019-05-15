using Microsoft.EntityFrameworkCore.Migrations;

namespace OrderApi.Migrations
{
    public partial class DiscountPriceAttribute : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "Discount",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "Discount");
        }
    }
}
