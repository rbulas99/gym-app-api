import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'workout' })
export class WorkoutEntity {
  @PrimaryGeneratedColumn()
  workoutId: number;

  @Column()
  userId: string;

  @Column()
  date: string;

  @Column()
  name: string;
}
