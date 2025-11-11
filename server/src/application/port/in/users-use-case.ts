import { UsersResponse } from '@application/domain/dto/out/users-response.dto';
export interface UsersUseCase {
  findById(id: string): Promise<UsersResponse>;
}
