import { Injectable, Logger, Module, OnApplicationBootstrap } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseInitLogger, DatabaseModule } from './core/db/database.module';

@Injectable()
export class AppInitLogger implements OnApplicationBootstrap {
  private readonly logger = new Logger(AppInitLogger.name);

  onApplicationBootstrap() {
    this.logger.log('App initialized');
  }
}

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers:[DatabaseInitLogger]
})
export class AppModule {}
