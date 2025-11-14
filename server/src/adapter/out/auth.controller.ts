import { AccessTokenResponse } from '@application/domain/dto/out/access-token-response.dto';
import { AuthAdapterInterface } from '@application/port/out/auth.adapter';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '@services/auth.service';
import { SignInQueryDto } from '../in/sign-in-query.dto';
import { SignUpQueryDto } from '../in/sign-up-query.dto';
import { IsPublic } from '@config/decorators/IsPublic.decorator';

@Controller('auth')
@IsPublic()
export class AuthController implements AuthAdapterInterface {
  constructor(private readonly authService: AuthService) {}
  @Post('signin')
  async authenticate(
    @Body() signInDto: SignInQueryDto,
  ): Promise<AccessTokenResponse> {
    return this.authService.signIn(signInDto);
  }
  @Post('signup')
  create(@Body() signUpDto: SignUpQueryDto): Promise<AccessTokenResponse> {
    return this.authService.signUp(signUpDto);
  }
}
