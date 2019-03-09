CREATE PROCEDURE [dbo].[pr_GetAllCustomers]
AS

	BEGIN
		SELECT [id], [FirstName], [Surname] FROM [dbo].[Customer]
	END;
