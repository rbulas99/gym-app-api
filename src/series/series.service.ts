import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeriesEnity } from './entities/series.enity';
import { Repository } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(SeriesEnity)
    private readonly seriesRepository: Repository<SeriesEnity>,
  ) {}

  async getSerie(serieId: number) {
    const serie = await this.seriesRepository.find({ where: { serieId } });

    if (serie.length) {
      return serie;
    }
    throw new NotFoundException('Serie not found!');
  }

  async getExerciseSeries(exerciseId: number) {
    const series = await this.seriesRepository.find({ where: { exerciseId } });

    if (series.length) {
      return series;
    }
    throw new NotFoundException('Exercerie not found!');
  }
  async deleteSerieFormExercise(serieId: number) {
    const serie = await this.getSerie(serieId);
    if (serie) {
      return this.seriesRepository.delete(serieId);
    }
    throw new NotFoundException('Serie not found!');
  }
}
