import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: 'JohnDoe',
    description: 'The new username of the user',
  })
  username?: string;

  @ApiProperty({ example: 180, description: 'The new height of the user' })
  height?: number;

  @ApiProperty({ example: 75, description: 'The new weight of the user' })
  weight?: number;
}
