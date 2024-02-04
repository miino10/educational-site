import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const courses = sqliteTable("courses", {
  id: text("id").notNull(),
  name: text("name")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
