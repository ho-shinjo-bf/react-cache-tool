import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersDB } from 'src/db/users';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    return UsersDB.create(createUserDto);
  }

  async findAll() {
    return UsersDB.get();
  }

  async findOne(id: UUID) {
    return UsersDB.find(id);
  }

  async update(id: UUID, updateUserDto: UpdateUserDto) {
    return UsersDB.update(id, updateUserDto);
  }

  async delete(id: UUID) {
    return UsersDB.delete(id);
  }
}
