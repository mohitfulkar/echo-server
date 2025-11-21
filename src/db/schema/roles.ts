import { varchar } from 'drizzle-orm/pg-core';
import { timestamp } from 'drizzle-orm/pg-core';
import { integer } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';
import { users } from './user';

export const roles = pgTable('roles', {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  name: varchar(),
  createdBy: integer().references(() => users.id),
  createdAt: timestamp().default(new Date()),
  updatedAt: timestamp({ mode: 'date', precision: 3 })
    .defaultNow()
    .$onUpdate(() => new Date()),
});
