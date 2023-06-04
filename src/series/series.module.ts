import { Module } from '@nestjs/common';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesEntity } from './entities/series.enity';

@Module({
  imports: [TypeOrmModule.forFeature([SeriesEntity])],
  controllers: [SeriesController],
  providers: [SeriesService],
})
export class SeriesModule {}
