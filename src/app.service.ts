import { Injectable } from '@nestjs/common';
import { FileProcessService } from './file-process.service'; 
import {join} from 'path'
@Injectable()
export class AppService {
  constructor(private fileProcessService: FileProcessService) {}
  getHello(lang: string): string {
    return this.fileProcessService.getFileContent(join(__dirname, '../hello-world.json'))[lang];
  }
}
