import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateWorkoutDto } from './dtos';

@ApiTags('Users/Workouts')
@Controller('users/:userId/workouts')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @ApiOperation({ summary: 'Get user workouts' })
  @Get()
  async getUserWorkoud(@Param('userId') userId: number) {
    return this.workoutService.getUserWorkouts(userId);
  }

  @ApiOperation({ summary: 'Create workout' })
  @Post()
  async createWorkout(
    @Param('userId') id: number,
    @Body() createWorkoutDto: CreateWorkoutDto,
  ) {
    return this.workoutService.createWorkout(id, createWorkoutDto);
  }
}
