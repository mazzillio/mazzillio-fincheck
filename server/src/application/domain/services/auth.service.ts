import { AuthUseCase } from '@application/port/in/auth-use-case';
import { Inject, Injectable } from '@nestjs/common';
import { SignInDto } from '../dto/in/sign-in.dto';
import { AccessTokenResponse } from '../dto/out/access-token-response.dto';
import { UsersGatewayInterface } from '../gateways/users-gateway';
import { HasGatewayInterface } from '../gateways/has-gateway';
import { InvalidCredentialException } from '../execeptions/invalid-credential.exeception';
import { TokenGateway } from '@application/domain/gateways/token-gateway';
import { SignUpQueryDto } from '@adapter/in/sign-up-query.dto';
import { UserAlreadyExitsException } from '../execeptions/user-already-exits.exeception';
import { Users } from '../entities/users';

@Injectable()
export class AuthService implements AuthUseCase {
  constructor(
    @Inject('UsersGatewayInterface')
    private readonly usersGateway: UsersGatewayInterface,
    @Inject('HasGatewayInterface')
    private readonly hasGateway: HasGatewayInterface,
    @Inject('TokenGateway')
    private readonly tokenGateway: TokenGateway,
  ) {}
  async signIn(signInDto: SignInDto): Promise<AccessTokenResponse> {
    const { email, password } = signInDto;
    const user = await this.usersGateway.findByEmail(email);
    if (!user) {
      throw new InvalidCredentialException();
    }
    const isPasswordValid = await this.hasGateway.compare(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new InvalidCredentialException();
    }
    return this.generateAccessToken(user.id);
  }
  async signUp(signUpDto: SignUpQueryDto): Promise<AccessTokenResponse> {
    const { name, email, password } = signUpDto;
    const emailTaken = await this.usersGateway.findByEmail(email);
    if (emailTaken) {
      throw new UserAlreadyExitsException();
    }
    const hashedPassword = await this.hasGateway.hash(password);
    const userEntity = new Users(name, email, hashedPassword);
    const user = await this.usersGateway.create(userEntity);
    return this.generateAccessToken(user.id);
  }

  private async generateAccessToken(
    userId: string,
  ): Promise<AccessTokenResponse> {
    const token = await this.tokenGateway.singToken(userId);
    return { accessToken: token };
  }
}
