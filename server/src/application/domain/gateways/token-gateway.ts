export interface TokenGateway {
  singToken(sub: string): Promise<string>;
  verifyToken(token: string): Promise<string>;
}
