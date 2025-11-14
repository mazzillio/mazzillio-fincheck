import { TokenGateway } from '@application/domain/gateways/token.gateway';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenJwtService implements TokenGateway {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  async singToken(sub: string): Promise<string> {
    return await this.jwtService.signAsync({ sub });
  }
  async verifyToken(token: string): Promise<string> {
    const secret = this.configService.get<string>('JWT_SECRET');
    if (!secret) {
      throw new Error('JWT_SECRET is missing');
    }
    const payload = await this.jwtService.verifyAsync(token, {
      secret,
    });
    return payload.sub;
  }
}
