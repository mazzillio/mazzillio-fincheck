import { TransactionType } from './enums/transaction-type.enum';

export class Transaction {
  id: string;
  userId: string;
  name: string;
  value: number;
  type: TransactionType;
  constructor(
    userId: string,
    name: string,
    value: number,
    type: TransactionType,
    id?: string,
  ) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.value = value;
    this.type = type;
  }
}
