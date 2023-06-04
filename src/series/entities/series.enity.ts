import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'serie' })
export class SeriesEnity {
  @PrimaryGeneratedColumn()
  serieId: number;

  @Column()
  exerciseId: number;

  @Column()
  reps: number;

  @Column()
  weight: number;
}
