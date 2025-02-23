import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnorealizapracticaService } from './alumnorealizapractica.service';
import { CreateAlumnorealizapracticaDto } from './dto/create-alumnorealizapractica.dto';
import { UpdateAlumnorealizapracticaDto } from './dto/update-alumnorealizapractica.dto';

@Controller('alumno-realiza-practica')
export class AlumnoRealizaPracticaController {
  constructor(private readonly alumnoRealizaPracticaService: AlumnorealizapracticaService) {}

  @Post()
  create(@Body() createAlumnoRealizaPracticaDto: CreateAlumnorealizapracticaDto) {
    return this.alumnoRealizaPracticaService.create(createAlumnoRealizaPracticaDto);
  }

  @Get()
  findAll() {
    return this.alumnoRealizaPracticaService.findAll();
  }

  @Get(':alumnoId/:practicaId')
  findOne(@Param('alumnoId') alumnoId: string, @Param('practicaId') practicaId: string) {
    return this.alumnoRealizaPracticaService.findOne(+alumnoId, +practicaId);
  }

  @Patch(':alumnoId/:practicaId')
  update(
    @Param('alumnoId') alumnoId: string,
    @Param('practicaId') practicaId: string,
    @Body() updateAlumnoRealizaPracticaDto: UpdateAlumnorealizapracticaDto,
  ) {
    return this.alumnoRealizaPracticaService.update(+alumnoId, +practicaId, updateAlumnoRealizaPracticaDto);
  }

  @Delete(':alumnoId/:practicaId')
  remove(@Param('alumnoId') alumnoId: string, @Param('practicaId') practicaId: string) {
    return this.alumnoRealizaPracticaService.remove(+alumnoId, +practicaId);
  }
}