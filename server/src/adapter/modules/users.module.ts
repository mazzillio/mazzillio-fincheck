import { Module } from '@nestjs/common';
import { UsersService } from '../../application/domain/services/users.service';
import { UsersController } from '../out/users.controller';
import { UsersRepositoryGateway } from 'src/adapter/out/persistence/repository/users.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersRepositoryGateway,
    {
      provide: 'UsersGatewayInterface',
      useExisting: UsersRepositoryGateway,
    },
  ],
})
export class UsersModule {}
