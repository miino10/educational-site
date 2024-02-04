import { sqliteTable, AnySQLiteColumn, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const courses = sqliteTable("courses", {
	id: text("id"),
	name: text("name").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
});