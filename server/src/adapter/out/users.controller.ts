import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from '@services/users.service';
import { UsersAdapter } from '@port/out/users-adapter';
import { UsersResponse } from '@application/domain/dto/out/users-response.dto';
import { ActiveUserId } from '@config/decorators/Active-User-Id.decorator';

@Controller('users')
export class UsersController implements UsersAdapter {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  me(@ActiveUserId() userId: string): Promise<UsersResponse> {
    return this.usersService.findById(userId);
  }
}
