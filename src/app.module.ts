import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManwhaModule } from './manwha/manwha.module';
import { MiddlewaresModule } from './middlewares/middlewares.module';
import { FileProcessService } from './file-process.service';

@Module({
  imports: [ManwhaModule, MiddlewaresModule],
  controllers: [AppController],
  providers: [AppService,FileProcessService],
})
export class AppModule {}
