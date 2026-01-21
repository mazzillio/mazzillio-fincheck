import { BankAccountsInDto } from '@application/domain/dto/in/bank-accounts-in.dto';
import { BankAccountType } from '@prisma/client';
import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class BankAccountsInQueryDto implements BankAccountsInDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;

  @IsNotEmpty()
  @IsEnum(BankAccountType)
  type: BankAccountType;
}
