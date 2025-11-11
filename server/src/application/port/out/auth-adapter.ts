import { SignInDto } from '@application/domain/dto/in/sign-in.dto';
import { AccessTokenResponse } from '@application/domain/dto/out/access-token-response.dto';

export interface AuthAdapterInterface {
  authenticate(signInDto: SignInDto): Promise<AccessTokenResponse>;
}
