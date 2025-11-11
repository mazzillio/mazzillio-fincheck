import { Inject, Injectable } from '@nestjs/common';
import { UsersGatewayInterface } from '@gateways/users-gateway';
import { UsersUseCase } from '@port/in/users-use-case';
import { UsersMapper } from '../mappers/UsersMap';

@Injectable()
export class UsersService implements UsersUseCase {
  constructor(
    @Inject('UsersGatewayInterface')
    private readonly usersGateway: UsersGatewayInterface,
  ) {}

  async findById(id: string) {
    const user = await this.usersGateway.findById(id);
    return UsersMapper.toUser(user);
  }
}
