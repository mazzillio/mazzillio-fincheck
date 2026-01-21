import { BankAccountsInDto } from '@application/domain/dto/in/bank-accounts-in.dto';

export class CreateBankAccountInDto {
  userId: string;
  bankAccount: BankAccountsInDto;
}
