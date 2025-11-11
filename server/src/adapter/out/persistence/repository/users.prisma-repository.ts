import { Injectable } from '@nestjs/common';
import { PrismaService } from '@config/prisma.service';
import { UsersGatewayInterface } from '@gateways/users-gateway';
import { Users } from '@entities/users';
import { UsersMapper } from '@mappers/UsersMap';

@Injectable()
export class UsersPrismaRepositoryGateway implements UsersGatewayInterface {
  constructor(private readonly prismaService: PrismaService) {}
  async create(user: Users): Promise<Users> {
    const { name, email, password } = user;
    const userCreated = await this.prismaService.user.create({
      data: {
        name,
        email,
        password,
        categories: {
          createMany: {
            data: [
              // Income
              { name: 'Salário', icon: 'salary', type: 'INCOME' },
              { name: 'Freelance', icon: 'freelance', type: 'INCOME' },
              { name: 'Outro', icon: 'other', type: 'INCOME' },
              // Expense
              { name: 'Casa', icon: 'home', type: 'EXPENSE' },
              { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
              { name: 'Educação', icon: 'education', type: 'EXPENSE' },
              { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
              { name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
              { name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
              { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
              { name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
              { name: 'Outro', icon: 'other', type: 'EXPENSE' },
            ],
          },
        },
      },
    });

    return UsersMapper.toUser(userCreated);
  }
  async emailExists(email: string): Promise<boolean> {
    const emailTaken = await this.prismaService.user.findUnique({
      where: { email },
      select: { id: true },
    });
    return !!emailTaken;
  }
  async findByEmail(email: string): Promise<Users> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    return user ? UsersMapper.toUser(user) : null;
  }
  async findById(id: string): Promise<Users> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });
    return UsersMapper.toUser(user);
  }
}
