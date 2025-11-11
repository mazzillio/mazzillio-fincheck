import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from '@services/users.service';
import { UsersAdapter } from '@port/out/users-adapter';
import { UsersResponse } from '@application/domain/dto/out/users-response.dto';

@Controller('users')
export class UsersController implements UsersAdapter {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  me(@Req() request: Request): Promise<UsersResponse> {
    const userId = request['userId'];
    return this.usersService.findById(userId);
  }
}
