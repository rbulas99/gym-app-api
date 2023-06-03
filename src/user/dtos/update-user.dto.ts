import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'JohnDoe',
    description: 'The new username of the user',
  })
  username?: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 180, description: 'The new height of the user' })
  height?: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 75, description: 'The new weight of the user' })
  weight?: number;
}
