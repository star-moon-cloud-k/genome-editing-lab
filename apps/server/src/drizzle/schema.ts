import {
  integer,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  unique,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const Timestamp = {
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at'),
} as const;
export const UserRole = pgEnum('role', ['user', 'manager', 'admin']);
export const Status = pgEnum('status', ['active', 'disabled']);

export const ImageType = pgEnum('type', ['stock']);

export const Images = pgTable('images', {
  id: uuid('id').defaultRandom().primaryKey(),
  key: text('key'),
  url: text('url').notNull(),
  type: ImageType('type'),
  order: integer('order').default(0),
  ...Timestamp,
});

export const Lab = pgTable('lab', {
  id: serial('id').primaryKey(),
  name: varchar('name'),
  professor: varchar('professor'),
  major: varchar('major'),
  schoolName: varchar('school_name'),
  ...Timestamp,
});

export const User = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    studentNumber: varchar('student_number', { length: 15 }).notNull(),
    password: varchar('password', { length: 40 }),
    role: UserRole('role'),
    status: Status('status'),
    lab: integer('lab').references(() => Lab.id),
    lastLoginAt: timestamp('last_login_at'),
    ...Timestamp,
  },
  (table) => [unique().on(table.studentNumber, table.lab)],
);

export const Stock = pgTable('stock', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  importCompany: varchar('importer_company', { length: 100 }),
  orderType: varchar('order_type', { length: 30 }),
  vendor: varchar('vendor', { length: 100 }),
  catalogId: varchar('catalog_id'),
  quantity: integer('quantity'),
  image: uuid('image').references(() => Images.id),
  minimumQuantity: integer('minimum_quantity'),
  maximumQuantity: integer('maximum_quantity'),
  description: varchar('description', { length: 400 }),
  lab: integer('lab').references(() => Lab.id),
  extra: jsonb('extra'),
  ...Timestamp,
});

export const Supplier = pgTable('supplier', {
  id: serial('id').primaryKey(),
  vendor: varchar('vendor'),
  description: varchar('description'),
  lab: integer('lab').references(() => Lab.id),
});
