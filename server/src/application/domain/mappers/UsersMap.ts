import { User } from '@prisma/client';
import { Users } from '@entities/users';
import { UserResponse } from '@applicationDto/out/user-response.dto';

export class UsersMapper {
  static toUser(user: User): Users {
    return new Users(user.name, user.email, user.password, user.id);
  }
  static toUserResponse(user: Users): UserResponse {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
