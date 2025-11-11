import { SignUpQueryDto } from '@adapter/in/sign-up-query.dto';
import { SignInDto } from '@application/domain/dto/in/sign-in.dto';
import { AccessTokenResponse } from '@application/domain/dto/out/access-token-response.dto';

export interface AuthUseCase {
  signIn(signInDto: SignInDto): Promise<AccessTokenResponse>;
  signUp(signUpDto: SignUpQueryDto): Promise<AccessTokenResponse>;
}
