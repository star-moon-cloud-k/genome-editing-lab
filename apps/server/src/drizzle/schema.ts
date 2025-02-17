import { sql } from 'drizzle-orm';

import {
  bigint,
  bigserial,
  boolean,
  date,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const Timestamp = {
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at'),
} as const;
export const UserRole = pgEnum('role', ['user']);
export const Status = pgEnum('status', ['active', 'disabled']);
export const PostType = pgEnum('postType', [
  'public',
  'announcement',
  'business',
  'event',
]);

export const ImageType = pgEnum('type', ['post']);

export const Images = pgTable('images', {
  id: uuid('id').defaultRandom().primaryKey(),
  key: text('key'),
  url: text('url').notNull(),
  type: ImageType('type'),
  order: integer('order').default(0),
  postId: bigint('post_id', { mode: 'number' }).references(() => Post.id),
  ...Timestamp,
});

export const Business = pgTable('business', {
  id: serial('id').primaryKey(),
  type: varchar('type'),
  name: varchar('name'),
});

export const User = pgTable('users', {
  id: uuid('id')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  CI: varchar('CI', { length: 200 }).unique(),
  nickname: varchar('nickname', { length: 20 }),
  role: UserRole('role'),
  status: Status('status'),
  lastLoginAt: timestamp('last_login_at'),
  registeredAt: timestamp('registered_at'),
  ...Timestamp,
});

export const UserBusiness = pgTable('user_business', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').references(() => User.id),
  businessId: integer('business_id').references(() => Business.id),
});

export const BoardType = pgTable('board_type', {
  id: serial('id').primaryKey(),
  type: varchar('type'),
  businessId: integer('business_id').references(() => Business.id),
});

export const Post = pgTable('post', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  title: varchar('title'),
  content: text('content'),
  authorId: uuid('author_id').references(() => User.id),
  status: Status('status'),
  postType: PostType('post_type'),
  boardId: integer('board_id').references(() => BoardType.id),
  deletedAt: timestamp('deleted_at'),
  ...Timestamp,
});

export const Comment = pgTable('comment', {
  id: uuid('id')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  body: text('body'),
  isAnonymity: boolean('is_anonymity'),
  authorId: uuid('author_id').references(() => User.id),
  parentComment: uuid('parent_comment').references(() => Comment.id),
  postId: bigint('post_id', { mode: 'number' }).references(() => Post.id),
  ...Timestamp,
});

export const CommentLike = pgTable(
  'comment_like',
  {
    userId: uuid('user_id').references(() => User.id),
    commentId: uuid('comment_id').references(() => Comment.id),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    primaryKey({ columns: [table.commentId, table.userId] }),
    primaryKey({
      name: 'comment_like_pk',
      columns: [table.commentId, table.userId],
    }),
  ],
);

export const PostLike = pgTable(
  'post_like',
  {
    userId: uuid('user_id').references(() => User.id),
    postId: bigint('post_id', { mode: 'number' }).references(() => Post.id),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    primaryKey({ columns: [table.postId, table.userId] }),
    primaryKey({
      name: 'post_like_pk',
      columns: [table.postId, table.userId],
    }),
  ],
);

export const News = pgTable('news', {
  id: serial('id').primaryKey(),
  guid: varchar('guid', { length: 512 }).unique(),
  title: varchar('title'),
  source: varchar('source'),
  link: varchar('link'),
  pubDate: date('pubDate'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const RssKeyword = pgTable('rss_keyword', {
  id: serial('id').primaryKey(),
  keyword: varchar('keyword').unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
