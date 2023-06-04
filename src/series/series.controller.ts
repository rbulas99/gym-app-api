import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SeriesService } from './series.service';

@ApiTags('Users/Workouts')
@Controller('workouts')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}
  @Get(':workoutId/series')
  @ApiOperation({ summary: 'Get exercise series' })
  async getExerciseSeries(@Param('workoutId') workoutId: number) {
    return this.seriesService.getExerciseSeries(workoutId);
  }
  @Delete('series/:serieId')
  @ApiOperation({ summary: 'Delete serie' })
  async deleteSerieFromExercise(@Param('serieId') serieId: number) {
    return this.seriesService.deleteSerieFormExercise(serieId);
  }
}
