import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'exercisetype' })
export class ExercisesListEntity {
  @PrimaryGeneratedColumn()
  exercisetypeId: number;

  @Column()
  name: string;
}
