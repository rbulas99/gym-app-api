import { ExercisesEntity } from 'src/exercises/entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'serie' })
export class SeriesEntity {
  @PrimaryGeneratedColumn()
  serieId: number;

  @Column()
  exerciseId: number;

  @Column()
  reps: number;

  @Column()
  weight: number;

  @ManyToOne(() => ExercisesEntity, (exercise) => exercise.series)
  @JoinColumn({ name: 'exerciseId' })
  exercise: ExercisesEntity;
}
