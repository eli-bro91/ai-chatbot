import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({
  path: '.env.local',
});

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  // Change dialect to SQLite
  dialect: 'sqlite', 
  dbCredentials: {
    // Use DATABASE_URL for SQLite connection string (e.g., "file:./dev.db")
    // biome-ignore lint: Forbidden non-null assertion.
    url: process.env.DATABASE_URL!, 
  },
  // Add driver specific options if needed for SQLite, e.g., migrations table
  driver: 'turso', // Drizzle Kit requires a driver for SQLite, 'turso' is common for local file-based SQLite
  migrations: {
     table: '_migrations' // Optional: specify migrations table name
  }
});
