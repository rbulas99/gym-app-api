import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
