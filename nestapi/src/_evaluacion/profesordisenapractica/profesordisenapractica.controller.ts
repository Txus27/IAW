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

  @Get(':profesorId/:practicaId')
  findOne(@Param('profesorId') profesorId: string, @Param('practicaId') practicaId: string) {
    return this.profesordisenapracticaService.findOne(+profesorId, +practicaId);
  }

  @Patch(':profesorId/:practicaId')
  update(
    @Param('profesorId') profesorId: string,
    @Param('practicaId') practicaId: string,
    @Body() updateProfesordisenapracticaDto: UpdateProfesordisenapracticaDto,
  ) {
    return this.profesordisenapracticaService.update(+profesorId, +practicaId, updateProfesordisenapracticaDto);
  }

  @Delete(':profesorId/:practicaId')
  remove(@Param('profesorId') profesorId: string, @Param('practicaId') practicaId: string) {
    return this.profesordisenapracticaService.remove(+profesorId, +practicaId);
  }
}