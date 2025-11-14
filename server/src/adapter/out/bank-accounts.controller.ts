import { Controller } from '@nestjs/common';
import { BankAccountsService } from '@application/domain/services/bank-accounts.service';


@Controller('bank-account')
export class BankAccountsController {
  constructor(private readonly bankAccountsService: BankAccountsService) {}

}
