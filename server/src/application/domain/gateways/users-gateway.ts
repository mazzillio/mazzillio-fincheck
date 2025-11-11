import { Users } from '@entities/users';

export interface UsersGatewayInterface {
  create(user: Users): Promise<Users>;
  emailExists(email: string): Promise<boolean>;
  findByEmail(email: string): Promise<Users>;
  findById(id: string): Promise<Users>;
}
