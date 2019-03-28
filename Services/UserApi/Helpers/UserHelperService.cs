

using UserApi.Interfaces.Helpers;
using UserApi.Mocking;

namespace UserApi.Helpers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Contexts;
    using Domains;
    using Dto.Users;

    public class UserHelperService : IUserContextService, IUserHelperService
    {

        public UserHelperService(UserContext userContext)
        {
           UserContext = userContext;

        }

        /// <summary>
        /// Create new user with specific role
        /// </summary>
        /// <param name="dto">User information stored in DTO</param>
        /// <param name="roleName">Name of role that will be assigned to new user</param>
        /// <returns></returns>
        public async Task<User> PrepareUser(UserDto dto, string roleName)
        {
            var entity = await UserContext.Users.Include(u => u.UserRoles).Where(u => u.Username == dto.Username).FirstOrDefaultAsync();

            // This user already exists
            if (entity != null) return null;

            // Create role if not exists
            var roleEntity = await UserContext.Roles.FirstOrDefaultAsync(r => r.Name == roleName) ?? new Role()
            {
                Name = roleName
            };

            // List of roles that will be added to new user
            var roles = new List<UserRoles>
            {
                new UserRoles() {User = new User() {Username = dto.Username}, Role = roleEntity}
            };

            // Encryption process
            CryptographyHelper.CreatePasswordHash(dto.Password, out var passwordHash, out var passwordSalt);

            // Creation of new user
            var newUser = new User
            {
                Username = dto.Username,
                UserRoles = roles,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            return newUser;
        }

        public UserContext UserContext { get; }
    }
}
