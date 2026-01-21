import { BankAccountType } from './enums/bank-account-type.enum';

export class BankAccounts {
  id: string;
  userId: string;
  name: string;
  initialBalance: number;
  color: string;
  type: BankAccountType;
  constructor(
    userId: string,
    name: string,
    initialBalance: number,
    color: string,
    type: BankAccountType,
    id?: string,
  ) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.initialBalance = initialBalance;
    this.color = color;
    this.type = type;
  }
}
