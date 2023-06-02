import { Module } from '@nestjs/common';
import { WorkoutExercisesService } from './workout-exercises.service';

@Module({
  providers: [WorkoutExercisesService],
})
export class WorkoutExercisesModule {}
