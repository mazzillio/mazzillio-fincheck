import { NotFoundException } from "@nestjs/common";

export class BankAccountNotFoundException extends NotFoundException {
  constructor(bankAccountId: string) {
    super(`Bank account ${bankAccountId} not found`);
  }
}