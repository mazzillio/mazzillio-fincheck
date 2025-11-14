import { BankAccountsGateway } from "@application/domain/gateways/bank-accounts.gateway";
import { PrismaService } from "@config/prisma.service";
import { Injectable } from "@nestjs/common";



@Injectable()
export class BankAccountsPrismaRepositoryGateway implements BankAccountsGateway {
  constructor(private readonly prismaService: PrismaService) {}
}