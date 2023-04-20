import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getListUser() {
    return 'Get list user';
  }
}
