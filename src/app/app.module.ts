import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from 'src/user/user.module';
import { SeriesModule } from 'src/series/series.module';
import { ExercisesModule } from 'src/exercises/exercises.module';
import { WorkoutModule } from 'src/workout/workout.module';

import { AppService } from './app.service';

import { UserEntity } from 'src/user/entities/user.entity';
import { WorkoutEntity } from 'src/workout/entities/workout.entity';
import { ExercisesEntity } from 'src/exercises/entities/exercises.entity';
import { SeriesEntity } from 'src/series/entities/series.enity';
import { ExercisesListEntity } from 'src/exercises/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'trainingdatabase',
      entities: [
        UserEntity,
        WorkoutEntity,
        ExercisesEntity,
        SeriesEntity,
        ExercisesListEntity,
      ],
      synchronize: false,
    }),
    UserModule,
    WorkoutModule,
    ExercisesModule,
    SeriesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
