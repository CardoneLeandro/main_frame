import { MongooseModule } from '@nestjs/mongoose';
import { env } from 'src/config/env.config';

export const MongoDatabase = MongooseModule.forRootAsync({
    useFactory: async () => {
      console.log('🔌 Connecting to MongoDB...');
      return {
        uri: env.NON_SQL_DATABASE,
      };
    },
  });