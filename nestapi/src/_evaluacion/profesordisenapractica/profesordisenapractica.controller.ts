import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesordisenapracticaService } from './profesordisenapractica.service';
import { CreateProfesordisenapracticaDto } from './dto/create-profesordisenapractica.dto';
import { UpdateProfesordisenapracticaDto } from './dto/update-profesordisenapractica.dto';

@Controller('profesordisenapractica')
export class ProfesordisenapracticaController {
  constructor(private readonly profesordisenapracticaService: ProfesordisenapracticaService) {}

  @Post()
  create(@Body() createProfesordisenapracticaDto: CreateProfesordisenapracticaDto) {
    return this.profesordisenapracticaService.create(createProfesordisenapracticaDto);
  }

  @Get()
  findAll() {
    return this.profesordisenapracticaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesordisenapracticaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfesordisenapracticaDto: UpdateProfesordisenapracticaDto) {
    return this.profesordisenapracticaService.update(+id, updateProfesordisenapracticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesordisenapracticaService.remove(+id);
  }
}
