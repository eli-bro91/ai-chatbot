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
    // Use DATABASE_URL for SQLite connection string (e.g., "file:./dev.db")
    // biome-ignore lint: Forbidden non-null assertion.
    url: process.env.DATABASE_URL!,
  },
  // Driver and migrations options removed as they caused type errors and might not be needed for basic file SQLite.
});
