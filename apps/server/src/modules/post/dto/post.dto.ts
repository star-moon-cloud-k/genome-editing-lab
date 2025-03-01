// import { Post } from '@root/drizzle/schema';
// import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
// import { z } from 'zod';
// import { createZodDto } from 'nestjs-zod';

// // export class InsertPostReq extends createZodDto(createInsertSchema(Post)) {}

// const insertPostReqSchema = z.object({
//   title: z.string().min(1),
//   content: z.string().min(1),
//   imageList: z.array(z.string()),
// });
// export class InsertPostReq extends createZodDto(insertPostReqSchema) {}
// export class UpdatePostReq extends createZodDto(createUpdateSchema(Post)) {}


