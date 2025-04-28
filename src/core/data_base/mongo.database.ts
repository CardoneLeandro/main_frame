import { MongooseModule } from "@nestjs/mongoose";
import {env} from 'src/config/env.config'

export const MongoDatabaseModule = MongooseModule.forRoot(
    env.NON_SQL_DATABASE)