import { BankAccountType } from '@application/domain/entities/enums/bank-account-type.enum';

export interface BankAccountResponseDto {
  id: string;
  userId: string;
  name: string;
  initialBalance: number;
  color: string;
  type: BankAccountType;
}
