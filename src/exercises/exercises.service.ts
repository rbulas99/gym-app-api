import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExercisesEntity } from './entities/exercises.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { WorkoutService } from 'src/workout/workout.service';
import { AddExerciseDto } from './dtos';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(ExercisesEntity)
    private readonly exercisesRepository: Repository<ExercisesEntity>,
    private readonly userService: UserService,
    private readonly workoutService: WorkoutService,
  ) {}

  async getExercise(exerciseId: number) {
    return this.exercisesRepository.find({ where: { exerciseId } });
  }

  async addExercise(workoutId: number, addExerciseDto: AddExerciseDto) {
    const workout = await this.workoutService.getWorkout(workoutId);

    if (workout) {
      const exercise = new ExercisesEntity();
      exercise.exerciseTypeId = addExerciseDto.exerciseTypeId;
      exercise.workoutId = workoutId;
      return this.exercisesRepository.save(exercise);
    }
    throw new NotFoundException('Workout not found!');
  }
  async getAllExercises(workoutId: number) {
    const workout = await this.workoutService.getWorkout(workoutId);
    if (workout) {
      return this.exercisesRepository.find({ where: { workoutId } });
    }
    throw new NotFoundException('Workout not found!');
  }
  async getWorkoutExercises(workoutId: number) {
    const workout = await this.workoutService.getWorkout(workoutId);
    if (workout) {
      return this.exercisesRepository.find({ where: { workoutId } });
    }
    throw new NotFoundException('Workout not found!');
  }
  async deleteExerciseFromWorkout(exerciseId: number) {
    const exercise = await this.getExercise(exerciseId);
    if (exercise.length) {
      return this.exercisesRepository.delete(exerciseId);
    }
    throw new NotFoundException('Exercise not found!');
  }
}
