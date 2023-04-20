import { Expose, plainToClass } from 'class-transformer';
import { IsEmpty, IsNotEmpty } from 'class-validator';

export abstract class BaseDto {
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
  @Expose()
  deletedAt: Date;

  static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true });
  }
}
