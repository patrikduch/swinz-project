CREATE PROCEDURE [dbo].[pr_DeleteCustomer]
	@customerId int
AS
	BEGIN
		IF EXISTS(SELECT * FROM [dbo].[Customer] WHERE [Id] = @customerId)

			DELETE FROM [dbo].[Customer] WHERE Id = @customerId;	
		
	END;
