import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'src/config/env.config'
export const SqlDatabase = TypeOrmModule.forRootAsync({
    useFactory: async () => {
      console.log('🔌 Connecting to PostgreSQL...');
      return {
        type: 'postgres',
        host: env.SQL_HOST,
        port: env.SQL_PORT,
        username: env.SQL_USER,
        password: env.SQL_PASSWORD,
        database: env.SQL_DATABASE,
        synchronize: true,
        autoLoadEntities: true,
      };
    },
  });
  