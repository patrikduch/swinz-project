//-----------------------------------------------------------------------
// <copyright file="UserTokenDto.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------
namespace UserApi.Dto
{
    /// <summary>
    /// Data transfer object for transfer user`s token
    /// </summary>
    public class UserTokenDto
    {
        /// <summary>
        /// Value of transmitted token
        /// </summary>
        public string TokenString { get; set; }
    }
}
