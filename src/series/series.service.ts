import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SeriesEntity } from './entities/series.enity';

import { AddSerieDto } from './dtos';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(SeriesEntity)
    private readonly seriesRepository: Repository<SeriesEntity>,
  ) {}

  async getSerie(serieId: number) {
    const serie = await this.seriesRepository.find({ where: { serieId } });

    if (serie.length) {
      return serie;
    }
    throw new NotFoundException('Serie not found!');
  }

  async deleteSerieFormExercise(serieId: number) {
    const serie = await this.getSerie(serieId);

    if (serie) {
      return this.seriesRepository.delete(serieId);
    }
    throw new NotFoundException('Serie not found!');
  }

  async addSerieToExercise(exerciseId: number, addSerieDto: AddSerieDto) {
    const serie = new SeriesEntity();
    serie.exerciseId = exerciseId;
    serie.reps = addSerieDto.reps;
    serie.weight = addSerieDto.weight;
    return this.seriesRepository.save(serie);
  }
}
