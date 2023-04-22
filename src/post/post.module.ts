import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from 'src/entities/post.entity/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { ConfigModule } from '@nestjs/config';
import { PostMockService } from './post-mock.service';
import { StoreModule } from 'src/store/store.module';
import { StoreConfig } from 'src/config/interface/configStore.interface';
import { post } from 'src/const/store.config';
import { StoreService } from 'src/store/store.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    StoreModule.forFeature({
      filename: 'post.json',
    }),
  ],
  controllers: [PostController],
  providers: [PostService, LoggerService],
  exports: [TypeOrmModule],
})
export class PostModule {}
