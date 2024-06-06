import {
  IsEmail,
  IsEnum,
  IsString,
  IsPositive,
  MaxLength,
  Max,
} from 'class-validator';

type Sex = 'male' | 'female';

export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsEnum(['male', 'female'])
  sex: Sex;

  @IsPositive()
  @Max(150)
  age: number;

  @MaxLength(255)
  note?: string;
}
