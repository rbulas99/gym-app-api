import { Module } from '@nestjs/common';
import { ExercisesModule } from 'src/exercises/exercises.module';
import { UserModule } from 'src/user/user.module';
import { WorkoutExercisesModule } from 'src/workout-exercises/workout-exercises.module';
import { WorkoutModule } from 'src/workout/workout.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { WorkoutEntity } from 'src/workout/entities/workout.entity';
import { ExercisesEntity } from 'src/exercises/entities/exercises.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'trainingdatabase',
      entities: [UserEntity, WorkoutEntity, ExercisesEntity],
      synchronize: false,
    }),
    UserModule,
    WorkoutModule,
    ExercisesModule,
    WorkoutExercisesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
