import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error('POSTGRES_URL environment variable is not set');
}

// Connection for migrations
const migrationClient = postgres(connectionString, { max: 1 });

// Connection for queries
const queryClient = postgres(connectionString);

export const db = drizzle(queryClient, { schema });

// Run migrations (if needed)
migrate(drizzle(migrationClient), { migrationsFolder: './drizzle' })
  .then(() => {
    console.log('Migrations complete!');
  })
  .catch((err) => {
    console.error('Error running migrations:', err);
  });
