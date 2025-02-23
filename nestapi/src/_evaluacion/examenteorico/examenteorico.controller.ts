import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { CreateExamenTeoricoDto } from './dto/create-examenteorico.dto';
import { UpdateExamenTeoricoDto } from './dto/update-examenteorico.dto';
import { ExamenTeoricoService } from './examenteorico.service';

@Controller('examenteorico')
export class ExamenteoricoController {
  constructor(private readonly examenteoricoService: ExamenTeoricoService) {}

  @Post()
  create(@Body() createExamenteoricoDto: CreateExamenTeoricoDto) {
    return this.examenteoricoService.create(createExamenteoricoDto);
  }

  @Get()
  findAll() {
    return this.examenteoricoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenteoricoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExamenteoricoDto: UpdateExamenTeoricoDto) {
    return this.examenteoricoService.update(+id, updateExamenteoricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenteoricoService.remove(+id);
  }
}
