import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamenteoricoService } from './examenteorico.service';
import { CreateExamenteoricoDto } from './dto/create-examenteorico.dto';
import { UpdateExamenteoricoDto } from './dto/update-examenteorico.dto';

@Controller('examenteorico')
export class ExamenteoricoController {
  constructor(private readonly examenteoricoService: ExamenteoricoService) {}

  @Post()
  create(@Body() createExamenteoricoDto: CreateExamenteoricoDto) {
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamenteoricoDto: UpdateExamenteoricoDto) {
    return this.examenteoricoService.update(+id, updateExamenteoricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenteoricoService.remove(+id);
  }
}
