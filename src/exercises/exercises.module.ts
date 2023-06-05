import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from 'src/user/user.module';

import { ExercisesService } from './exercises.service';
import { WorkoutService } from 'src/workout/workout.service';
import { UserService } from 'src/user/user.service';

import { ExercisesEntity } from './entities/exercises.entity';
import { ExercisesListEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExercisesEntity, ExercisesListEntity]),
    UserModule,
  ],
  providers: [ExercisesService, WorkoutService, UserService],
  exports: [TypeOrmModule],
})
export class ExercisesModule {}
