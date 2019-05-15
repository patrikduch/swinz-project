﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using OrderApi.Contexts;

namespace OrderApi.Migrations
{
    [DbContext(typeof(ProductContext))]
    [Migration("20190515141802_DiscountEntity")]
    partial class DiscountEntity
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PersistenceLib.Domains.OrderApi.Discount", b =>
                {
                    b.Property<string>("Id");

                    b.HasKey("Id");

                    b.ToTable("Discount");
                });

            modelBuilder.Entity("PersistenceLib.Domains.OrderApi.Order", b =>
                {
                    b.Property<int>("Id");

                    b.Property<DateTime>("CreationDate");

                    b.Property<int>("CustomerId");

                    b.Property<bool>("IsDeleted");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("PersistenceLib.Domains.OrderApi.OrderProduct", b =>
                {
                    b.Property<string>("OrderProductId");

                    b.Property<int>("OrderId");

                    b.Property<int>("ProductId");

                    b.HasKey("OrderProductId", "OrderId", "ProductId");

                    b.HasIndex("OrderId");

                    b.HasIndex("ProductId");

                    b.ToTable("OrderProduct");
                });

            modelBuilder.Entity("PersistenceLib.Domains.OrderApi.Product", b =>
                {
                    b.Property<int>("Id");

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("Name");

                    b.Property<decimal>("OriginalPrice");

                    b.Property<decimal>("Price");

                    b.HasKey("Id");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("PersistenceLib.Domains.UserApi.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Discount");

                    b.Property<int>("DiscountCounter");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<int>("OriginalPrice");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Customer");
                });

            modelBuilder.Entity("PersistenceLib.Domains.UserApi.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Role");
                });

            modelBuilder.Entity("PersistenceLib.Domains.UserApi.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("PersistenceLib.Domains.UserApi.UserRoles", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("RoleId");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.HasIndex("UserId");

                    b.ToTable("UserRoles");
                });

            modelBuilder.Entity("PersistenceLib.Domains.OrderApi.Order", b =>
                {
                    b.HasOne("PersistenceLib.Domains.UserApi.Customer", "Customer")
                        .WithMany("Orders")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("PersistenceLib.Domains.OrderApi.OrderProduct", b =>
                {
                    b.HasOne("PersistenceLib.Domains.OrderApi.Order", "Order")
                        .WithMany("OrderProducts")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PersistenceLib.Domains.OrderApi.Product", "Product")
                        .WithMany("OrderProducts")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("PersistenceLib.Domains.UserApi.Customer", b =>
                {
                    b.HasOne("PersistenceLib.Domains.UserApi.User", "User")
                        .WithOne("Customer")
                        .HasForeignKey("PersistenceLib.Domains.UserApi.Customer", "UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("PersistenceLib.Domains.UserApi.UserRoles", b =>
                {
                    b.HasOne("PersistenceLib.Domains.UserApi.Role", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PersistenceLib.Domains.UserApi.User", "User")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
