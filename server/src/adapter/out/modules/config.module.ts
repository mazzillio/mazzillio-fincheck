import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TokenJwtService } from '@config/token-jwt.service';
import { HashBcyptService } from '@config/hash-bcypt.service';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        if (!secret) {
          throw new Error('JWT_SECRET is missing');
        }
        return {
          secret,
          signOptions: {
            expiresIn: '7d',
          },
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'TokenGateway',
      useClass: TokenJwtService,
    },
    {
      provide: 'HasGatewayInterface',
      useClass: HashBcyptService,
    },
  ],
  exports: ['TokenGateway', 'HasGatewayInterface'],
})
export class ConfigModule {}
