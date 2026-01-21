import { BankAccountResponseDto } from '../dto/out/bank-account-response.dto';
import { BankAccount } from '@prisma/client';
import { BankAccountType } from '../entities/enums/bank-account-type.enum';

export class BankAccountsMap {
  static toBankAccountsResponse(
    bankAccount: BankAccount,
  ): BankAccountResponseDto {
    return {
      id: bankAccount.id,
      userId: bankAccount.userId,
      name: bankAccount.name,
      initialBalance: bankAccount.initialBalance,
      color: bankAccount.color,
      type: bankAccount.type as BankAccountType,
    };
  }
}
