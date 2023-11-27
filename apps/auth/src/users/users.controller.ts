import { Controller } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto, UserServiceControllerMethods } from '@app/common';

@Controller()
@UserServiceControllerMethods()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  createUser(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  findAll() {
    return this.usersService.findAll();
  }
  findOne(@Payload() id: number) {
    return this.usersService.findOne(id);
  }

  remove(@Payload() id: number) {
    return this.usersService.remove(id);
  }
}
