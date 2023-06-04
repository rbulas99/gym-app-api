import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddSerieDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 5, description: 'Number of reps' })
  reps: number;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 50, description: 'Weight' })
  weight: number;
}
