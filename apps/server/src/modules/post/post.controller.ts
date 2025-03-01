// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { PostService } from './post.service';

// @Controller('api/post')
// export class PostController {
//   constructor(private readonly postService: PostService) {}

//   @Post()
//   create(@Body() payload: any) {
//     return this.postService.create(payload);
//   }

//   @Get()
//   findAll() {
//     return this.postService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: string) {
//     const [post] = await this.postService.findOne(+id);
//     return post;
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updatePostDto: any) {
//     return this.postService.update(+id, updatePostDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.postService.remove(+id);
//   }
// }
