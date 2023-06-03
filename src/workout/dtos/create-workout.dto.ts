import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkoutDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'ExampleWorkout',
    description: 'The name of the workout',
  })
  name: string;
}
