import { CreatePostDto } from './dto/create-post-dto.ts';

export class PostMockService {
  createPost(post: CreatePostDto): CreatePostDto {
    return {
      content: 'Test mock service',
      title: 'Test mick service',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    };
  }
}
