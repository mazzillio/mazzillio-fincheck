import { UsersResponse } from '@applicationDto/out/users-response.dto';

export interface UsersAdapter {
  me(req: any): Promise<UsersResponse>;
}
