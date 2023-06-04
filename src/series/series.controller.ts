import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SeriesService } from './series.service';

@ApiTags('Users/Workouts')
@Controller('workouts/:workoutId/series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}
  @Get()
  @ApiOperation({ summary: 'Get exercise series' })
  async getExerciseSeries(@Param('workoutId') workoutId: number) {
    return this.seriesService.getExerciseSeries(workoutId);
  }
  @Delete(':serieId')
  @ApiOperation({ summary: 'Delete serie' })
  async deleteSerieFromExercise(@Param('serieId') serieId: number) {
    return this.seriesService.deleteSerieFormExercise(serieId);
  }
}
