import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@applicationDto/in/create-user.dto';
import { UsersGatewayInterface } from '@gateways/users-gateway';
import { Users } from '@entities/users';
import { UsersUseCase } from '@port/in/users-use-case';
import { UserResponse } from '@applicationDto/out/user-response.dto';
import { UsersMapper } from '@mappers/UsersMap';
import { UserAlreadyExitsException } from '../execeptions/user-already-exits.exeception';
import { HasGatewayInterface } from '../gateways/has-gateway';
@Injectable()
export class UsersService implements UsersUseCase {
  constructor(
    @Inject('UsersGatewayInterface')
    private readonly usersGateway: UsersGatewayInterface,
    @Inject('HasGatewayInterface')
    private readonly hasGateway: HasGatewayInterface,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponse> {
    const { name, email, password } = createUserDto;
    const emailTaken = await this.usersGateway.findByEmail(email);
    if (emailTaken) {
      throw new UserAlreadyExitsException();
    }
    const hashedPassword = await this.hasGateway.hash(password);
    const userEntity = new Users(name, email, hashedPassword);
    const user = await this.usersGateway.create(userEntity);
    return UsersMapper.toUserResponse(user);
  }
  async findById(id: string) {
    const user = await this.usersGateway.findById(id);
    return user;
  }
}
