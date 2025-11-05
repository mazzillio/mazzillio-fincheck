import { CreateUserQueryDto } from '@adapterDto/in/create-user.dto';
import { UserResponse } from '@applicationDto/out/user-response.dto';

export interface UsersAdapter {
  create(createUserDto: CreateUserQueryDto): Promise<UserResponse>;
  findById(id: string): Promise<UserResponse>;
}
