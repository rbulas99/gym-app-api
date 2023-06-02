import { Module } from '@nestjs/common';
import { ExercisesModule } from 'src/exercises/exercises.module';
import { UserModule } from 'src/user/user.module';
import { WorkoutExercisesModule } from 'src/workout-exercises/workout-exercises.module';
import { WorkoutModule } from 'src/workout/workout.module';

@Module({
  imports: [ExercisesModule, UserModule, WorkoutModule, WorkoutExercisesModule],
})
export class AppModule {}
