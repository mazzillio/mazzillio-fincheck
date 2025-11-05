import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from '../../application/domain/services/users.service';
import { UsersAdapter } from 'src/application/port/out/users-adapter';
import { CreateUserQueryDto } from './dto/in/create-user.dto';

@Controller('users')
export class UsersController implements UsersAdapter {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserQueryDto) {
    return this.usersService.create(createUserDto);
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }
}
