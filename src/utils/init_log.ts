import { Injectable, Logger, OnModuleInit } from "@nestjs/common";

@Injectable()
export class SqlDatabaseModule implements OnModuleInit {
  private readonly logger = new Logger(SqlDatabaseModule.name);

  onModuleInit() {
    this.logger.log('Initialized');
  }
}
