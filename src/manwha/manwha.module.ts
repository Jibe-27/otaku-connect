import { Module } from '@nestjs/common';
import { ManwhaService } from './manwha.service';
import { ManwhaController } from './manwha.controller';
import { FileProcessService } from 'src/file-process.service';

@Module({
  providers: [ManwhaService, FileProcessService],
  controllers: [ManwhaController]
})
export class ManwhaModule {}
