import { Module } from '@nestjs/common';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesEnity } from './entities/series.enity';

@Module({
  imports: [TypeOrmModule.forFeature([SeriesEnity])],
  controllers: [SeriesController],
  providers: [SeriesService],
})
export class SeriesModule {}
