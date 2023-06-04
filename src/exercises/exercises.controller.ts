import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ExercisesService } from './exercises.service';
import { AddExerciseDto } from './dtos';

@ApiTags('Users/Workouts')
@Controller('workouts')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get(':workoutId')
  @ApiOperation({ summary: 'Get workout exercises' })
  async getWorkoutExercises(@Param('workoutId') workoutId: number) {
    return this.exercisesService.getWorkoutExercises(workoutId);
  }
  @Post(':workoutId')
  @ApiOperation({ summary: 'Add Exercise to workout' })
  async createWorkout(
    @Param('workoutId') workoutId: number,
    @Body() addExerciseDto: AddExerciseDto,
  ) {
    return this.exercisesService.addExercise(workoutId, addExerciseDto);
  }
  @Delete(':exerciseId')
  @ApiOperation({ summary: 'Delete exercise from workout' })
  async deleteExerciseFromWorkout(@Param('exerciseId') exerciseId: number) {
    return this.exercisesService.deleteExerciseFromWorkout(exerciseId);
  }
  @Get('exercise/list')
  async getExerciseList() {
    return this.exercisesService.getExercisesList();
  }
}
