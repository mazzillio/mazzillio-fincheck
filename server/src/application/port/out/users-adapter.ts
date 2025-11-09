import { CreateUserQueryDto } from '@adapter/out/dto/in/create-user-query.dto';
import { UserResponse } from '@applicationDto/out/user-response.dto';

export interface UsersAdapter {
  create(createUserDto: CreateUserQueryDto): Promise<UserResponse>;
  findById(id: string): Promise<UserResponse>;
}
