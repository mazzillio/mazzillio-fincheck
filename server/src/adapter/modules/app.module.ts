import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
