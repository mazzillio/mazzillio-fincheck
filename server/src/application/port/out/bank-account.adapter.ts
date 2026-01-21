import { BankAccountsInDto } from '@application/domain/dto/in/bank-accounts-in.dto';
import { BankAccountResponseDto } from '@application/domain/dto/out/bank-account-response.dto';

export interface BankAccountsAdapter {
  create(
    userId: string,
    bankAccount: BankAccountsInDto,
  ): Promise<BankAccountResponseDto>;
  findAllByUserId(userId: string): Promise<BankAccountResponseDto[]>;
  update(userId: string, bankAccountId: string, updateBankAccount: BankAccountsInDto): Promise<BankAccountResponseDto>;
}
