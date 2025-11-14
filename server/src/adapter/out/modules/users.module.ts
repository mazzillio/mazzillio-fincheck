import { Module } from '@nestjs/common';
import { UsersService } from '@services/users.service';
import { UsersController } from '@adapter/out/users.controller';
import { UsersPrismaRepositoryGateway } from '@adapter/out/persistence/repository/users-prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UsersGatewayInterface',
      useClass: UsersPrismaRepositoryGateway,
    },
  ],
})
export class UsersModule {}
