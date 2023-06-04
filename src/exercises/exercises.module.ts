import { Module } from '@nestjs/common';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { WorkoutService } from 'src/workout/workout.service';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercisesEntity } from './entities/exercises.entity';
import { UserModule } from 'src/user/user.module';
import { WorkoutModule } from 'src/workout/workout.module';
import { ExercisesListEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExercisesEntity, ExercisesListEntity]),
    UserModule,
    WorkoutModule,
  ],
  providers: [ExercisesService, WorkoutService, UserService],
  controllers: [ExercisesController],
})
export class ExercisesModule {}
