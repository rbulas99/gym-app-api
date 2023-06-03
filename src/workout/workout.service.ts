import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkoutEntity } from './entities/workout.entity';
import { CreateWorkoutDto } from './dtos';
import { UserService } from 'src/user/user.service';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(WorkoutEntity)
    private readonly workoutRepository: Repository<WorkoutEntity>,
    private readonly userService: UserService,
  ) {}
  async getUserWorkouts(userId: number) {
    return this.workoutRepository.find({
      where: { userId },
      relations: ['exercises'],
    });
  }
  async createWorkout(userId: number, createWorkoutDto: CreateWorkoutDto) {
    const user = await this.userService.findOne(userId);

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
