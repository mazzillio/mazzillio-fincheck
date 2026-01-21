import { BankAccounts } from '@application/domain/entities/bank-accounts';
import { BanckAccountsGateway } from '@application/domain/gateways/bank-accounts.gateway';
import { BankAccountsMap } from '@application/domain/mappers/BankAccountsMap';
import { PrismaService } from '@config/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BankAccountsPrismaRepositoryGateway
  implements BanckAccountsGateway
{
  constructor(private readonly prismaService: PrismaService) {}

  async create(bankAccount: BankAccounts): Promise<BankAccounts> {
    const bankAccountCreated = await this.prismaService.bankAccount.create({
      data: bankAccount,
    });
    return BankAccountsMap.toBankAccountsResponse(bankAccountCreated);
  }
  async findAll(userId: string): Promise<BankAccounts[]> {
    const bankAccounts = await this.prismaService.bankAccount.findMany({
      where: { userId },
    });
    return bankAccounts.map(BankAccountsMap.toBankAccountsResponse);
  }
  async update(bankAccount: BankAccounts): Promise<BankAccounts> {
    const bankAccountUpdated = await this.prismaService.bankAccount.update({
      where: { id: bankAccount.id, userId: bankAccount.userId },
      data: bankAccount,
    });
    return BankAccountsMap.toBankAccountsResponse(bankAccountUpdated);
  }
  async userIdIsOwner(userId: string, bankAccountId: string): Promise<boolean> {
    const bankAccount = await this.prismaService.bankAccount.findUnique({
      where: { id: bankAccountId, userId },
    });
    return bankAccount !== null;
  }
}
