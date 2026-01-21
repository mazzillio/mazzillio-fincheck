import { BankAccountsInDto } from '@application/domain/dto/in/bank-accounts-in.dto';

export class UpdateBankAccountInDto {
  userId: string;
  bankAccountId: string;
  bankAccount: BankAccountsInDto;
}
