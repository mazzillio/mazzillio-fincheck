import { Module } from '@nestjs/common';
import { AuthService } from '@application/domain/services/auth.service';
import { AuthController } from '@adapter/out/auth.controller';
import { UsersPrismaRepositoryGateway } from '@adapter/out/persistence/repository/users.prisma-repository';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'UsersGatewayInterface',
      useClass: UsersPrismaRepositoryGateway,
    },
  ],
})
export class AuthModule {}
