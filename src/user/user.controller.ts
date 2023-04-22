import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { LoggerService } from 'src/logger/logger.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private loggerService: LoggerService,
  ) {}
  @Get()
  async getListUser() {
    return await this.userService.getListUser();
  }

  @Get('getCount')
  getCount() {
    console.log('User get count: ');
    this.loggerService.log();
  }
}
