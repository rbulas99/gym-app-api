import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../user/user.module';
import { ExercisesModule } from 'src/exercises/exercises.module';
import { SeriesModule } from 'src/series/series.module';

import { UserService } from 'src/user/user.service';
import { WorkoutService } from './workout.service';
import { ExercisesService } from 'src/exercises/exercises.service';
import { SeriesService } from 'src/series/series.service';

import { WorkoutController } from './workout.controller';

import { WorkoutEntity } from './entities/workout.entity';
import { ExercisesEntity } from 'src/exercises/entities';
import { SeriesEntity } from 'src/series/entities/series.enity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutEntity, ExercisesEntity, SeriesEntity]),
    UserModule,
    ExercisesModule,
    WorkoutModule,
    SeriesModule,
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService, UserService, ExercisesService, SeriesService],
  exports: [TypeOrmModule],
})
export class WorkoutModule {}
