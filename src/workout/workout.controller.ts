import { Controller, Get, Param } from '@nestjs/common';
import { WorkoutService } from './workout.service';

@Controller('users/:userId/workouts')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Get()
  async getUserWorkouts(@Param('userId') userId: string) {
    return this.workoutService.getUserWorkouts(userId);
  }
}
