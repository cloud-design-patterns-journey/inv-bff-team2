import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'dziyana',
      password: '12345',
    },
    {
      userId: 2,
      username: 'muriel',
      password: '12345',
    },
    {
      userId: 3,
      username: 'vincent',
      password: '12345',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}