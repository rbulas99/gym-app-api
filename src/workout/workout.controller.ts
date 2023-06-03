import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateWorkoutDto } from './dtos';

@ApiTags('Users/Workouts')
@Controller('users/:userId/workouts')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Get()
  async findUserWorkouts(@Param('userId') userId: number) {
    return this.workoutService.getUserWorkouts(userId);
  }
  @Post()
  async createWorkout(
    @Param('userId') id: number,
    @Body() createWorkoutDto: CreateWorkoutDto,
  ) {
    return this.workoutService.createWorkout(id, createWorkoutDto);
  }
}
