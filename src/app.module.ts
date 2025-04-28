import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqlDatabase } from './core/data_base/sql.database';
import { MongoDatabaseModule } from './core/data_base/mongo.database';
import { InitLogService } from './utils/init_log';

@Module({
  imports: [
    SqlDatabase, MongoDatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService, InitLogService],
})
export class AppModule {}
