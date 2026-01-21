import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { BankAccountsService } from '@application/domain/services/banck-accounts.service';
import { BankAccountsAdapter } from '@application/port/out/bank-account.adapter';
import { BankAccountsInQueryDto } from '@adapter/in/bank-accounts-in-query.dto';
import { BankAccountResponseDto } from '@application/domain/dto/out/bank-account-response.dto';
import { ActiveUserId } from '@config/decorators/Active-User-Id.decorator';

@Controller('bank-accounts')
export class BankAccountsController implements BankAccountsAdapter {
  constructor(private readonly bankAccountsService: BankAccountsService) {}

  @Post()
  async create(
    @ActiveUserId() userId: string,
    @Body() createBankAccountInDto: BankAccountsInQueryDto,
  ): Promise<BankAccountResponseDto> {
    return this.bankAccountsService.create({
      userId,
      bankAccount: createBankAccountInDto,
    });
  }
  @Get()
  async findAllByUserId(
    @ActiveUserId() userId: string,
  ): Promise<BankAccountResponseDto[]> {
    return this.bankAccountsService.findAllByUserId(userId);
  }
  @Put(':banckAccountId')
  async update(
    @ActiveUserId() userId: string,
    @Param('banckAccountId', ParseUUIDPipe) bankAccountId: string,
    @Body() updateBankAccountInDto: BankAccountsInQueryDto,
  ): Promise<BankAccountResponseDto> {
    return this.bankAccountsService.update({
      userId,
      bankAccountId,
      bankAccount: updateBankAccountInDto,
    });
  }
}
