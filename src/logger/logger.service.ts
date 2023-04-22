import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.DEFAULT,
})
export class LoggerService {
  count: number = 0;
  log(): void {
    this.count++;
    console.log(this.count);
  }
}
