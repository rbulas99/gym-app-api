import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'exercise' })
export class ExerciseEntity {
  @PrimaryGeneratedColumn()
  exerciseId: number;

  @Column()
  workoutId: string;

  @Column()
  exerciseTypeId: string;
}
