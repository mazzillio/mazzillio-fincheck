import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { UsersModule } from './users.module';
import { DatabaseModule } from './database.module';
import { AuthModule } from './auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@config/auth.guard';
import { CategoriesModule } from './categories.module';
import { BankAccountsModule } from './bank-account.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UsersModule, AuthModule, CategoriesModule, BankAccountsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
