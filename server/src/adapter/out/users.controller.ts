import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from '@services/users.service';
import { UsersAdapter } from '@port/out/users-adapter';
import { CreateUserQueryDto } from '@adapter/out/dto/in/create-user-query.dto';
import { UserResponse } from '@application/domain/dto/out/user-response.dto';

@Controller('users')
export class UsersController implements UsersAdapter {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserQueryDto): Promise<UserResponse> {
    return this.usersService.create(createUserDto);
  }
  @Get(':id')
  findById(@Param('id') id: string): Promise<UserResponse> {
    return this.usersService.findById(id);
  }
}
