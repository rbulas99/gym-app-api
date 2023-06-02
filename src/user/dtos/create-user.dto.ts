import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;
}
