CREATE PROCEDURE [dbo].[pr_GetAllCustomers]
AS

	BEGIN
		SELECT [id] FROM [dbo].[Customer]
	END;
