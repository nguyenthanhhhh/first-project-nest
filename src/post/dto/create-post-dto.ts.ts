import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, isString } from 'class-validator';
import { BaseDto } from './base.dto';

export class CreatePostDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  content: string;
  @IsString()
  @IsNotEmpty()
  @Expose()
  title: string;
}
