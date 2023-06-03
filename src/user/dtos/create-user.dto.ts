import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'JohnDoe', description: 'The username of the user' })
  username: string;

  @IsNumber()
  @ApiProperty({ example: 180, description: 'The height of the user' })
  height: number;

  @IsNumber()
  @ApiProperty({ example: 75, description: 'The weight of the user' })
  weight: number;
}
