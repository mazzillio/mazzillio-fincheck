import { Module } from '@nestjs/common';
import { BankAccountsController } from '../bank-accounts.controller';
import { BankAccountsService } from '@application/domain/services/banck-accounts.service';
import { BankAccountsPrismaRepositoryGateway } from '../persistence/repository/bank-accounts-prisma.repository';

@Module({
  controllers: [BankAccountsController],
  providers: [
    BankAccountsService,
    {
      provide: 'BankAccountsGatewayInterface',
      useClass: BankAccountsPrismaRepositoryGateway,
    },
  ],
})
export class BankAccountsModule {}
