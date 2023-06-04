import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddExerciseDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 5, description: 'The exapmle of the exerciseId' })
  exerciseTypeId: number;
}
