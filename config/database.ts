import path from 'path';

interface EnvConfig {
  (key: string, defaultValue?: string): string;
  bool(key: string, defaultValue?: boolean): boolean;
  int(key: string, defaultValue?: number): number;
}

interface DatabaseConnection {
  connection: {
    connectionString?: string;
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
    ssl: boolean | {
      key: string;
      cert: string;
      ca: string;
      capath: string;
      cipher: string;
      rejectUnauthorized: boolean;
    };
  };
  pool: {
    min: number;
    max: number;
  };
}

interface DatabaseConnections {
  postgres: DatabaseConnection;
}

export default ({ env }: { env: EnvConfig }) => {
  const client = env('DATABASE_CLIENT', 'postgres') as keyof DatabaseConnections;

  const connections: DatabaseConnections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
      debug: false,
    },
  };
};
