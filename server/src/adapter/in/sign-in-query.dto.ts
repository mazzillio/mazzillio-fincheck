import { SignInDto } from '@application/domain/dto/in/sign-in.dto';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignInQueryDto implements SignInDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
