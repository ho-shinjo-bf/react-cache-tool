// in memory db for test only

import { UUID, randomUUID } from 'crypto';

export interface User {
  id: UUID;
  name: string;
  email: string;
  sex: 'male' | 'female';
  age: number;
  note?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const DB_USERS: User[] = [
  {
    id: randomUUID(),
    name: 'John Doe',
    email: 'doe.john@gmail.com',
    sex: 'male',
    age: 25,
    note: 'This is a John Doe speaking',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: randomUUID(),
    name: 'Jane Doe',
    email: 'doe.jane@gmail.com',
    sex: 'female',
    age: 25,
    note: 'This is a Jane Doe speaking',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class UsersDB {
  static async get(): Promise<User[]> {
    await sleep(Math.random() * 1000);
    return DB_USERS;
  }

  static async find(id: string): Promise<User> {
    await sleep(Math.random() * 300);
    return DB_USERS.find((user) => user.id === id);
  }

  static async create(user: Omit<User, 'id'>): Promise<User> {
    await sleep(Math.random() * 300);
    const newUser = {
      ...user,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    DB_USERS.push(newUser);

    return newUser;
  }

  static async update(id: UUID, user: Partial<User>): Promise<User> {
    await sleep(Math.random() * 300);
    const index = DB_USERS.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }

    const newUser = {
      ...DB_USERS[index],
      ...user,
      updatedAt: new Date(),
    };

    DB_USERS[index] = newUser;

    return newUser;
  }

  static async delete(id: string): Promise<User> {
    await sleep(Math.random() * 100);
    const index = DB_USERS.findIndex((user) => user.id === id);
    const user = DB_USERS[index];
    DB_USERS.splice(index, 1);
    return user;
  }
}
