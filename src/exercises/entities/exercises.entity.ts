import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ExercisesListEntity } from './exercises-list.enity';
import { WorkoutEntity } from 'src/workout/entities/workout.entity';
import { SeriesEntity } from 'src/series/entities/series.enity';

@Entity({ name: 'exercise' })
export class ExercisesEntity {
  @PrimaryGeneratedColumn()
  exerciseId: number;

  @Column()
  workoutId: number;

  @Column()
  exerciseTypeId: number;

  @OneToOne(() => ExercisesListEntity)
  @JoinColumn({ name: 'exerciseTypeId' })
  exerciseType: ExercisesListEntity;

  @ManyToOne(() => WorkoutEntity, (workout) => workout.exercises)
  @JoinColumn({ name: 'workoutId' })
  workout: WorkoutEntity;

  @OneToMany(() => SeriesEntity, (serie) => serie.exercise)
  @JoinColumn({ name: 'exerciseId' })
  series: SeriesEntity[];
}
