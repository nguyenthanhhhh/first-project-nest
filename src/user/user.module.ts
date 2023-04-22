import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PostEntity } from 'src/entities/post.entity/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [UserController],
  providers: [UserService, LoggerService],
})
export class UserModule {}
