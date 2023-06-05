import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeriesService } from './series.service';

import { SeriesEntity } from './entities/series.enity';

@Module({
  imports: [TypeOrmModule.forFeature([SeriesEntity])],
  providers: [SeriesService],
  exports: [TypeOrmModule],
})
export class SeriesModule {}
