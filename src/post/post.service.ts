import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post-dto.ts';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from 'src/entities/post.entity/post.entity';
import { StoreService } from './store.service.js';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>, // @Inject('APP_FACEBOOK') appFacebook: StoreConfig,
    @Inject('STORE_SERVICE') private storeService: StoreService,
  ) {
    // console.log(appFacebook);
  }

  async getListPost() {
    return this.postRepository.find();
  }

  async createPost(data: CreatePostDto): Promise<CreatePostDto> {
    this.storeService.save(data);
    // let newPost = this.postRepository.create(data);
    // newPost = await this.postRepository.save(newPost);
    // return newPost;
    return data;
  }
}
