using Microsoft.EntityFrameworkCore.Migrations;

namespace OrderApi.Migrations
{
    public partial class DiscountValueAttribute : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "Discount");

            migrationBuilder.AddColumn<int>(
                name: "DiscountValue",
                table: "Discount",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DiscountValue",
                table: "Discount");

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "Discount",
                nullable: false,
                defaultValue: 0m);
        }
    }
}
