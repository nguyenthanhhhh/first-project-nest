import { Inject, Injectable } from '@nestjs/common';
import { StoreConfig } from '../config/interface/configStore.interface';
import * as fs from 'fs';
import { CreatePostDto } from 'src/post/dto/create-post-dto.ts';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from 'src/entities/post.entity/post.entity';
import { Repository } from 'typeorm';
import { STORE_CONFIG_TOKEN } from 'src/const/store.config';

@Injectable()
export class StoreService {
  constructor(
    @Inject('STORE_CONFIG_TOKEN')
    private readonly storeConfig: StoreConfig, // @InjectRepository(PostEntity) // private readonly postRepository: Repository<PostEntity>,
  ) {
    if (!fs.existsSync(this.storeConfig.dirname)) {
      fs.mkdirSync(this.storeConfig.dirname);
    }
  }

  async save(data: CreatePostDto) {
    fs.appendFileSync(
      `${this.storeConfig.dirname}/${this.storeConfig.filename}`,
      JSON.stringify(data),
    );
    // await this.postRepository.save(data);
  }
}
