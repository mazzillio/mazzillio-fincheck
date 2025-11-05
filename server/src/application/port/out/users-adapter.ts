import { CreateUserDto } from 'src/application/domain/dto/in/create-user.dto';

export interface UsersAdapter {
  create(createUserDto: CreateUserDto);
  findById(id: string);
}
