import { BankAccountType } from '@prisma/client';

export interface BankAccountsInDto {
  name: string;
  initialBalance: number;
  color: string;
  type: BankAccountType;
}
