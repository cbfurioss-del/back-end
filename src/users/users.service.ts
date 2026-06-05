import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: `${Date.now()}`,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const user = this.findOne(id);
    const updatedUser = { ...user, ...updateUserDto };
    this.users = this.users.map((item) => (item.id === id ? updatedUser : item));
    return updatedUser;
  }

  remove(id: string): { deleted: boolean } {
    this.findOne(id);
    this.users = this.users.filter((item) => item.id !== id);
    return { deleted: true };
  }
}
