import { ExercisesEntity } from 'src/exercises/entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  AfterLoad,
} from 'typeorm';

@Entity({ name: 'workout' })
export class WorkoutEntity {
  @PrimaryGeneratedColumn()
  workoutId: number;

  @Column()
  userId: number;

  @Column({ type: 'datetime' })
  date: Date;

  @Column()
  name: string;

  @OneToMany(() => ExercisesEntity, (exercise) => exercise.workout)
  @JoinColumn({ name: 'workoutId' })
  exercises: ExercisesEntity[];

  numberOfExercises: number;

  @AfterLoad()
  calculateNumberOfExercises(): void {
    this.numberOfExercises = this.exercises ? this.exercises.length : 0;
  }
}
