import { Module } from '@nestjs/common';
import { BankAccountsController } from '../bank-accounts.controller';
import { BankAccountsService } from '@application/domain/services/bank-accounts.service';

@Module({
  controllers: [BankAccountsController],
  providers: [BankAccountsService]
})
export class BankAccountsModule {}
