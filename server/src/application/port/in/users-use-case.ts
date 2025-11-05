import { Users } from 'src/application/domain/entities/users';
import { CreateUserDto } from 'src/application/domain/dto/in/create-user.dto';
import { UserResponse } from 'src/application/domain/dto/out/user-response.dto';

export interface UsersUseCase {
  create(createUserDto: CreateUserDto): Promise<UserResponse>;
  findById(id: string): Promise<Users>;
}
