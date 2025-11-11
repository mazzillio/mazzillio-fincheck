import { HasGatewayInterface } from '@application/domain/gateways/has-gateway';
import { compare, hash } from 'bcryptjs';

export class HashBcyptService implements HasGatewayInterface {
  async hash(password: string): Promise<string> {
    return await hash(password, 12);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await compare(password, hashedPassword);
  }
}
