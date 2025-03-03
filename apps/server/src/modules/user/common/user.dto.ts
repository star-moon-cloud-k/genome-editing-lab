import { users } from '@prisma/client';

export type UserSelectType = Pick<
  users,
  'id' | 'student_number' | 'lab' | 'status'
>;

export type UserInsertType = Omit<users, 'id' | 'created_at' | 'updated_at'>;
