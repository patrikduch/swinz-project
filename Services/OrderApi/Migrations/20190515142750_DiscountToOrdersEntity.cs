using Microsoft.EntityFrameworkCore.Migrations;

namespace OrderApi.Migrations
{
    public partial class DiscountToOrdersEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DiscountId",
                table: "Order",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Order_DiscountId",
                table: "Order",
                column: "DiscountId");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Discount_DiscountId",
                table: "Order",
                column: "DiscountId",
                principalTable: "Discount",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Discount_DiscountId",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_DiscountId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "DiscountId",
                table: "Order");
        }
    }
}
