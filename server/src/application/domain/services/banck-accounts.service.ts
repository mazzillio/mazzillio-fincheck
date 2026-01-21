import { BankAccountsUseCase } from '@application/port/in/bank-account.use-case';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateBankAccountInDto } from '../dto/in/create-bank-accounts-in.dto';
import { BankAccountResponseDto } from '../dto/out/bank-account-response.dto';
import { BanckAccountsGateway } from '../gateways/bank-accounts.gateway';
import { BankAccounts } from '../entities/bank-accounts';
import { BankAccountType } from '../entities/enums/bank-account-type.enum';
import { BankAccountsMap } from '../mappers/BankAccountsMap';
import { UpdateBankAccountInDto } from '../dto/in/update-bank-accounts-in.dto';
import { BankAccountNotFoundException } from '../execeptions/bank-account-not-found.exception';

@Injectable()
export class BankAccountsService implements BankAccountsUseCase {
  constructor(
    @Inject('BankAccountsGatewayInterface')
    private readonly bankAccountsGateway: BanckAccountsGateway,
  ) {}
  async create(
    createBankAccountInDto: CreateBankAccountInDto,
  ): Promise<BankAccountResponseDto> {
    const bankAccount = new BankAccounts(
      createBankAccountInDto.userId,
      createBankAccountInDto.bankAccount.name,
      createBankAccountInDto.bankAccount.initialBalance,
      createBankAccountInDto.bankAccount.color,
      createBankAccountInDto.bankAccount.type as BankAccountType,
    );
    return this.bankAccountsGateway.create(bankAccount);
  }
  async findAllByUserId(userId: string): Promise<BankAccountResponseDto[]> {
    const bankAccounts = await this.bankAccountsGateway.findAll(userId);
    return bankAccounts.map(BankAccountsMap.toBankAccountsResponse);
  }
  async update(updateBankAccountInDto: UpdateBankAccountInDto): Promise<BankAccountResponseDto> {
    const isOwner = await this.bankAccountsGateway.userIdIsOwner(updateBankAccountInDto.userId, updateBankAccountInDto.bankAccountId);
    if (!isOwner) {
      throw new BankAccountNotFoundException(updateBankAccountInDto.bankAccountId);
    }
    const bankAccountEntity = new BankAccounts(
      updateBankAccountInDto.userId,
      updateBankAccountInDto.bankAccount.name,
      updateBankAccountInDto.bankAccount.initialBalance,
      updateBankAccountInDto.bankAccount.color,
      updateBankAccountInDto.bankAccount.type as BankAccountType,
      updateBankAccountInDto.bankAccountId
    );
    bankAccountEntity.id = updateBankAccountInDto.bankAccountId;
    const bankAccount = await this.bankAccountsGateway.update(bankAccountEntity);
    return BankAccountsMap.toBankAccountsResponse(bankAccount);
  }
}
