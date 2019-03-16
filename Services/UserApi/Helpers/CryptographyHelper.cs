//-----------------------------------------------------------------------
// <copyright file="CryptographyHelper.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Helpers
{
    using System;

    /// <summary>
    /// Encrypt helper for password storage
    /// </summary>
    public class CryptographyHelper
    {
        private  CryptographyHelper()
        {
        }

        /// <summary>
        /// Creation of password hash
        /// </summary>
        /// <param name="password">Original password input</param>
        /// <param name="passwordHash">Hash that will be generated</param>
        /// <param name="passwordSalt">Salt that will be generated</param>
        public static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
