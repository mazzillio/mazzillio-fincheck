import { UsersService } from 'src/application/domain/services/users.service';
import { UsersGatewayInMemory } from 'test/gateways/users-gateway-in-memory';

describe('UsersService', () => {
  let usersService: UsersService;
  let usersGateway: UsersGatewayInMemory;

  beforeEach(() => {
    usersGateway = new UsersGatewayInMemory();
    usersService = new UsersService(usersGateway);
  });
  it('should be able to create a new user', async () => {
    const user = await usersService.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '12345678',
    });
    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
  });
});
