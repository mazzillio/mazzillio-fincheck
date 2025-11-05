import { Users } from '@entities/users';

export interface UsersGatewayInterface {
  create(user: Users): Promise<Users>;
  findByEmail(email: string): Promise<boolean>;
  findById(id: string): Promise<Users>;
}
