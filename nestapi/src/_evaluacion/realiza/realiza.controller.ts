import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RealizaService } from './realiza.service';
import { CreateRealizaDto } from './dto/create-realiza.dto';
import { UpdateRealizaDto } from './dto/update-realiza.dto';

@Controller('realiza')
export class RealizaController {
  constructor(private readonly realizaService: RealizaService) {}

  @Post()
  create(@Body() createRealizaDto: CreateRealizaDto) {
    return this.realizaService.create(createRealizaDto);
  }

  @Get()
  findAll() {
    return this.realizaService.findAll();
  }

  @Get(':AlumnoId/:PracticaId/:fecha')
  findOne(
    @Param('AlumnoId') AlumnoId: string,
    @Param('PracticaId') PracticaId: string,
    @Param('fecha') fecha: string
  ) {
    return this.realizaService.findOne(+AlumnoId, +PracticaId, fecha);
  }

  @Put(':AlumnoId/:PracticaId/:fecha')
  update(
    @Param('AlumnoId') AlumnoId: string,
    @Param('PracticaId') PracticaId: string,
    @Param('fecha') fecha: string,
    @Body() updateRealizaDto: UpdateRealizaDto
  ) {
    return this.realizaService.update(+AlumnoId, +PracticaId, fecha, updateRealizaDto);
  }

  @Delete(':AlumnoId/:PracticaId/:fecha')
  remove(
    @Param('AlumnoId') AlumnoId: string,
    @Param('PracticaId') PracticaId: string,
    @Param('fecha') fecha: string
  ) {
    return this.realizaService.remove(+AlumnoId, +PracticaId, fecha);
  }
}