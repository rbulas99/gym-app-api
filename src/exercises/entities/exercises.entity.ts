import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'exercise' })
export class ExercisesEntity {
  @PrimaryGeneratedColumn()
  exerciseId: number;

  @Column()
  workoutId: number;

  @Column()
  exerciseTypeId: number;
}
