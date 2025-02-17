import { ImageType } from '@root/drizzle/schema';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const createImageSchema = z.object({
  type: z.enum(ImageType.enumValues),
  order: z.number(),
  path: z.string(),
});
export class CreateImageDto extends createZodDto(createImageSchema) {}
