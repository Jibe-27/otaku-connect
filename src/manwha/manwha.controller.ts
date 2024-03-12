import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Manwha } from './manwha.entity';
import { ManwhaService } from './manwha.service';

@Controller('manwha')
export class ManwhaController {
    constructor(private manwhaService: ManwhaService) {}
    
    @Get()
    findAll(): Manwha[] {
        return this.manwhaService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Manwha {
        return this.manwhaService.findById(+id);
    }
    @Delete(':id') 
    remove(@Param('id') id: string): void {
        this.manwhaService.deleteById(+id);
    }
    @Put() 
    update(@Body() manwha: Manwha): void {
        this.manwhaService.putManwha(manwha);
    }
    @Post()
    create(@Body() manwha: Manwha): void {
        this.manwhaService.postManwha(manwha);
    }
}
