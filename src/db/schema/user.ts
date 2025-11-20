import { json } from 'drizzle-orm/pg-core';
import {
  pgTable,
  varchar,
  timestamp,
  integer,
  boolean,
} from 'drizzle-orm/pg-core';
import { roles } from './roles';

export const users = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar(),
  lastName: varchar(),
  email: varchar(),
  password: varchar(),
  contactNumber: integer(),
  isVerified: boolean().default(false),
  isOTPVerified: boolean().default(false),
  isDeleted: boolean().default(false),
  roleId: integer().references(() => roles.id),
  additionInfo: json(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp({ mode: 'date', precision: 3 })
    .defaultNow()
    .$onUpdate(() => new Date()),
});
