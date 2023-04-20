import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from 'src/entities/post.entity/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { ConfigModule } from '@nestjs/config';
import { PostMockService } from './post-mock.service';
import { StoreService } from './store.service';

const configFacebook = {
  appID: 'test ID',
  appSecret: 'Facebook001',
};

function createStore(): StoreService {
  return new StoreService();
}

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostController],
  providers: [
    {
      provide: PostService,
      useClass: PostMockService,
    },
    {
      provide: 'STORE_SERVICE',
      useFactory: createStore,
    },
  ],
  exports: [TypeOrmModule],
})
export class PostModule {}
