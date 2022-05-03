import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('phone')
  async findUserByPhone(@Query() query): Promise<User> {
    return this.userService.findUserByPhone({ phone: query.phone });
  }

  @Get(':id')
  async findUserById(@Param('id') userId: string): Promise<User> {
    return this.userService.findUserById({
      id: Number(userId),
    });
  }

  @Post()
  async createUser(
    @Body()
    createUserData: {
      firstName?: string;
      lastName?: string;
      phone: string;
      bio: string;
    },
  ): Promise<User> {
    const { firstName, lastName, phone, bio } = createUserData;
    return this.userService.createUser({
      firstName,
      lastName,
      phone,
      bio,
    });
  }
}
