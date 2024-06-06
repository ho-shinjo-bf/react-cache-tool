import { UUID } from 'crypto';

type Sex = 'male' | 'female';

export class GetUserDto {
  id: UUID;
  name: string;
  email: string;
  sex: Sex;
  age: number;
  note?: string;
}
