import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { UserModule } from '../user/user.module';
import { WorkoutEntity } from './entities/workout.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutEntity]), UserModule],
  controllers: [WorkoutController],
  providers: [WorkoutService, UserService],
})
export class WorkoutModule {}
