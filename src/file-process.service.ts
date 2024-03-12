import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FileProcessService {
    
    getFileContent(url: string) {
        try {
            const data = fs.readFileSync(url, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading the file:', error);
            return [];
        }
    }
}