import { SignUpDto } from '@application/domain/dto/in/sign-up.dto';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpQueryDto implements SignUpDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
