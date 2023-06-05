import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { WorkoutService } from 'src/workout/workout.service';

import { UserEntity } from './entities/user.entity';
import { WorkoutEntity } from 'src/workout/entities/workout.entity';
import { ExercisesEntity } from 'src/exercises/entities';

import { UserController } from './user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, WorkoutEntity, ExercisesEntity]),
  ],
  controllers: [UserController],
  providers: [UserService, WorkoutService],
  exports: [TypeOrmModule],
})
export class UserModule {}
