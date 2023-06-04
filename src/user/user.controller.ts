import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get user by Id' })
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    const user = await this.userService.getUser(id);
    if (user) {
      return user;
    } else {
      throw new NotFoundException('User not found!');
    }
  }
  @ApiOperation({ summary: 'Create user' })
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.addUser(createUserDto);
  }
  @ApiOperation({ summary: 'Edit user' })
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }
}
