import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { WorkoutService } from './workout.service';
import { ExercisesService } from 'src/exercises/exercises.service';
import { SeriesService } from 'src/series/series.service';

import { AddExerciseDto } from 'src/exercises/dtos';
import { CreateWorkoutDto } from './dtos';
import { AddSerieDto } from 'src/series/dtos';

@ApiTags('Workouts')
@Controller('workouts')
export class WorkoutController {
  constructor(
    private readonly workoutService: WorkoutService,
    private readonly exercisesService: ExercisesService,
    private readonly seriesService: SeriesService,
  ) {}

  @ApiOperation({ summary: 'Create workout' })
  @Post(':userId')
  async createWorkout(
    @Param('userId') userId: number,
    @Body() createWorkoutDto: CreateWorkoutDto,
  ) {
    return this.workoutService.createWorkout(userId, createWorkoutDto);
  }

  @Get(':workoutId')
  @ApiOperation({ summary: 'Get workout' })
  async getWorkoutExercises(@Param('workoutId') workoutId: number) {
    return this.workoutService.getWorkout(workoutId);
  }

  @Post(':workoutId/exercises')
  @ApiOperation({ summary: 'Add Exercise to workout' })
  async addExercise(
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

  @Post('exercises/:exerciseId')
  @ApiOperation({ summary: 'Add serie to exercise' })
  async addSerieToExercise(
    @Param('exerciseId') exerciseId: number,
    @Body() addSerieDto: AddSerieDto,
  ) {
    return this.seriesService.addSerieToExercise(exerciseId, addSerieDto);
  }

  @Delete('series/:serieId')
  @ApiOperation({ summary: 'Delete serie' })
  async deleteSerieFromExercise(@Param('serieId') serieId: number) {
    return this.seriesService.deleteSerieFormExercise(serieId);
  }

  @Get('exercises/list')
  @ApiOperation({ summary: 'Get exercise select list' })
  async getExerciseList() {
    return this.exercisesService.getExercisesList();
  }
}
