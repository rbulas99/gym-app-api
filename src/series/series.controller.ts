import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SeriesService } from './series.service';
import { AddSerieDto } from './dtos/add-serie.dto';

@ApiTags('Users/Workouts')
@Controller('workouts')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}
  @Get(':workoutId/series')
  @ApiOperation({ summary: 'Get exercise series' })
  async getExerciseSeries(@Param('workoutId') workoutId: number) {
    return this.seriesService.getExerciseSeries(workoutId);
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
}
