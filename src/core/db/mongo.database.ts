import { MongooseModule } from '@nestjs/mongoose';
import { env } from 'src/config/env.config';

export const MongoDatabase = MongooseModule.forRoot(env.NON_SQL_DATABASE);