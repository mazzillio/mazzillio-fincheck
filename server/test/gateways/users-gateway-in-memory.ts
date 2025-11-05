import { Users } from '../../src/application/domain/entities/users';
import { UsersGatewayInterface } from '../../src/adapter/out/persistence/repository/users-gateway';
import { randomUUID } from 'crypto';

export class UsersGatewayInMemory implements UsersGatewayInterface {
  private _users: Users[] = [];
  constructor() {
    this._users = [];
  }
  async create(user: Users): Promise<Users> {
    const newUser = new Users(
      user.name,
      user.email,
      user.password,
      randomUUID().toString(),
    );
    this._users.push(newUser);
    return newUser;
  }

  findByEmail(email: string): Promise<boolean> {
    return Promise.resolve(this._users.some((user) => user.email === email));
  }

  async findById(id: string): Promise<Users> {
    return this._users.find((user) => user.id === id) || null;
  }
  get users(): Users[] {
    return this._users;
  }
}
