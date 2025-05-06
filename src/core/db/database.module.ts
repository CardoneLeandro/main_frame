import { Injectable, Logger, Module, OnModuleInit } from '@nestjs/common';
import { SqlDatabase } from './sql.database';
import { MongoDatabase } from './mongo.database';
import { AppInitLogger } from 'src/app.module';

@Injectable()
export class DatabaseInitLogger implements OnModuleInit {
  private readonly logger = new Logger(DatabaseInitLogger.name);

  onModuleInit() {
    this.logger.log('Database module initialized');
  }
}

@Module({
  controllers: [],
  imports: [SqlDatabase, MongoDatabase],
  exports: [SqlDatabase, MongoDatabase],
  providers:[AppInitLogger]
})




export class DatabaseModule {}