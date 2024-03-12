import { Injectable } from '@nestjs/common';
import { Manwha } from './manwha.entity';
import * as fs from 'fs';
import {join} from 'path';
import { FileProcessService } from 'src/file-process.service';

@Injectable()
export class ManwhaService {
    private manwhas: Manwha[];
    
    constructor(private fileProcessService: FileProcessService) {
        this.manwhas = this.getListOfManwha();
    }
    findAll(): Manwha[]{
        return this.manwhas;
    }
    findById(id: number): Manwha{
        return this.manwhas.find(manwha => manwha.id === id);
    }

    deleteById(id: number): void { 
        this.manwhas = this.manwhas.filter(manwha => manwha.id !== id);
    }
    putManwha(manwha: Manwha) {
        this.manwhas = this.manwhas.map(m => m.id === manwha.id ? manwha : m);
    }
    postManwha(manwha: Manwha) {
        this.manwhas.push(manwha);
    }
    private getListOfManwha(): Manwha[] {
        return this.fileProcessService.getFileContent(join(__dirname, '../../src/manwha/manwhas.json'));
    }
}
