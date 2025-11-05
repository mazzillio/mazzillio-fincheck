import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@applicationDto/in/create-user.dto';
import { hash } from 'bcryptjs';
import { UsersGatewayInterface } from '@gateways/users-gateway';
import { Users } from '@entities/users';
import { UsersUseCase } from '@port/in/users-use-case';
import { UserResponse } from '@applicationDto/out/user-response.dto';
import { UsersMapper } from '@mappers/UsersMap';
@Injectable()
export class UsersService implements UsersUseCase {
  constructor(
    @Inject('UsersGatewayInterface')
    private readonly usersGateway: UsersGatewayInterface,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponse> {
    const { name, email, password } = createUserDto;
    const emailTaken = await this.usersGateway.findByEmail(email);
    if (emailTaken) {
      throw new ConflictException('This email is already in use');
    }
    const hashedPassword = await hash(password, 8);
    const userEntity = new Users(name, email, hashedPassword);
    const user = await this.usersGateway.create(userEntity);
    return UsersMapper.toUserResponse(user);
  }
  async findById(id: string) {
    const user = await this.usersGateway.findById(id);
    return user;
  }
}
