import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserService } from 'src/user/user.service';

import { WorkoutEntity } from './entities/workout.entity';

import { CreateWorkoutDto } from './dtos';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(WorkoutEntity)
    private readonly workoutRepository: Repository<WorkoutEntity>,
    private readonly userService: UserService,
  ) {}

  async getWorkout(workoutId: number) {
    const workout = await this.workoutRepository.findOne({
      where: { workoutId },
      relations: ['exercises', 'exercises.series', 'exercises.exerciseType'],
      order: { workoutId: 'DESC' },
    });
    if (workout) {
      return workout;
    }
    throw new NotFoundException('Workouts not found!');
  }

  async getAllWorkouts(userId: number) {
    const user = await this.userService.getUser(userId);
    if (user) {
      const workouts = await this.workoutRepository.find({
        where: { userId },
        order: { workoutId: 'DESC' },
      });
      return workouts;
    }
    throw new NotFoundException('User not found!');
  }

  async createWorkout(userId: number, createWorkoutDto: CreateWorkoutDto) {
    const user = await this.userService.getUser(userId);

    if (user) {
      const workout = new WorkoutEntity();
      workout.userId = userId;
      workout.name = createWorkoutDto.name;
      workout.date = new Date();
      return this.workoutRepository.save(workout);
    }
    throw new NotFoundException('User not found!');
  }
}
