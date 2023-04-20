import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post-dto.ts';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('getListPost')
  async getListPost() {
    return await this.postService.getListPost();
  }

  /* 
    -Để thực hiện validate, cần sử dụng Pipe như bên dưới, sẽ phụ thuộc vào 2 class là Transform và Validator
    -Trường hợp này đã sử dụng Global ở main rồi nên không cần nữa
  */
  // @UsePipes(new ValidationPipe())
  @Post('createPost')
  async createPost(@Body() body: CreatePostDto) {
    const bodyValidate = CreatePostDto.plainToClass(body);
    const result = await this.postService.createPost(bodyValidate);
    return result;
  }
}
