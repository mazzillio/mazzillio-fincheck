import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/in/create-user.dto';
import { hash } from 'bcryptjs';
import { UsersGatewayInterface } from '../../../adapter/out/persistence/repository/users-gateway';
import { Users } from '../entities/users';
import { UsersUseCase } from 'src/application/port/in/users-use-case';
import { UserResponse } from '../dto/out/user-response.dto';
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
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
  async findById(id: string) {
    const user = await this.usersGateway.findById(id);
    return user;
  }
}
