import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@drizzle/schema';
import { DrizzleAsyncProvider } from '@drizzle/drizzle.provider';
import { Post } from '@drizzle/schema';
import { InsertPostReq, UpdatePostReq } from './dto/post.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class PostService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>,
  ) {}

  create(payload: InsertPostReq) {
    return this.db.insert(Post).values(payload).returning();
  }

  findAll() {
    return this.db.select().from(Post);
    
  }

  findOne(id: number) {
    return this.db.select().from(Post).where(eq(Post.id, id));
  }

  async update(id: number, payload: UpdatePostReq) {
    const [post] = await this.findOne(id);
    if (!post) {
      throw new NotFoundException();
    }

    await this.db
      .update(Post)
      .set({
        ...payload,
        updatedAt: new Date(),
      })
      .where(eq(Post.id, post.id));

    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
