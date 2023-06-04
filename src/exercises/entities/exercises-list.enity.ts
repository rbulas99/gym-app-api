import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'exercisetype' })
export class ExercisesListEntity {
  @PrimaryGeneratedColumn()
  exerciseTypeId: number;

  @Column()
  name: string;
}
