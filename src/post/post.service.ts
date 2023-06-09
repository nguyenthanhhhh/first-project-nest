import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post-dto.ts';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from 'src/entities/post.entity/post.entity';
import { StoreModule } from 'src/store/store.module';
import { StoreService } from 'src/store/store.service';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>, // @Inject('APP_FACEBOOK') appFacebook: StoreConfig,
    @Inject('STORE_SERVICE')
    private readonly storeService: StoreService,
    private readonly loggerService: LoggerService,
  ) {
    // console.log(appFacebook);
  }

  getListPost() {
    return this.postRepository.find();
  }

  async createPost(data: CreatePostDto): Promise<CreatePostDto> {
    let newPost = this.postRepository.create(data);
    newPost = await this.postRepository.save(newPost);
    return newPost;
  }

  savePost(data: CreatePostDto) {
    this.storeService.save(data);
  }
}
