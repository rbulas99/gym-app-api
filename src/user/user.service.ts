import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';

import { CreateUserDto, UpdateUserDto } from './dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers() {
    return this.userRepository.find();
  }

  async getUser(id: number) {
    return this.userRepository.findOne({ where: { userId: id } });
  }

  async addUser(createUserDto: CreateUserDto) {
    const user = new UserEntity();
    user.username = createUserDto.username;
    user.height = createUserDto.height;
    user.weight = createUserDto.weight;
    return this.userRepository.save(user);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { userId: id } });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    user.username = updateUserDto.username;
    user.height = updateUserDto.height;
    user.weight = updateUserDto.weight;
    return this.userRepository.save(user);
  }
}
