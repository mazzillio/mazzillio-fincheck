import { User } from '@prisma/client';
import { Users } from '../entities/users';

export function toUsers(user: User): Users {
  return new Users(user.name, user.email, user.password, user.id);
}
