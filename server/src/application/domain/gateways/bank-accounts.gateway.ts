import { BankAccounts } from '../entities/bank-accounts';

export interface BanckAccountsGateway {
  create(bankAccount: BankAccounts): Promise<BankAccounts>;
  findAll(userId: string): Promise<BankAccounts[]>;
  update(bankAccount: BankAccounts): Promise<BankAccounts>;
  userIdIsOwner(userId: string, bankAccountId: string): Promise<boolean>;
}
