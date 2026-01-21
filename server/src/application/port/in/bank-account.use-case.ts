import { CreateBankAccountInDto } from '@application/domain/dto/in/create-bank-accounts-in.dto';
import { UpdateBankAccountInDto } from '@application/domain/dto/in/update-bank-accounts-in.dto';
import { BankAccountResponseDto } from '@application/domain/dto/out/bank-account-response.dto';

export interface BankAccountsUseCase {
  create(
    createBankAccountInDto: CreateBankAccountInDto,
  ): Promise<BankAccountResponseDto>;
  findAllByUserId(userId: string): Promise<BankAccountResponseDto[]>;
  update(updateBankAccountInDto: UpdateBankAccountInDto): Promise<BankAccountResponseDto>;
}
