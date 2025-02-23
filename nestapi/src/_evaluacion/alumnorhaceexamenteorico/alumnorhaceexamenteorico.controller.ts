import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnorhaceexamenteoricoService } from './alumnorhaceexamenteorico.service';
import { CreateAlumnorhaceexamenteoricoDto } from './dto/create-alumnorhaceexamenteorico.dto';
import { UpdateAlumnorhaceexamenteoricoDto } from './dto/update-alumnorhaceexamenteorico.dto';

@Controller('alumnorhaceexamenteorico')
export class AlumnorhaceexamenteoricoController {
  constructor(private readonly alumnorhaceexamenteoricoService: AlumnorhaceexamenteoricoService) {}

  @Post()
  create(@Body() createAlumnorhaceexamenteoricoDto: CreateAlumnorhaceexamenteoricoDto) {
    return this.alumnorhaceexamenteoricoService.create(createAlumnorhaceexamenteoricoDto);
  }

  @Get()
  findAll() {
    return this.alumnorhaceexamenteoricoService.findAll();
  }

  @Get(':alumnoId/:examenTeoricoId')
  findOne(@Param('alumnoId') alumnoId: string, @Param('examenTeoricoId') examenTeoricoId: string) {
    return this.alumnorhaceexamenteoricoService.findOne(+alumnoId, +examenTeoricoId);
  }

  @Patch(':alumnoId/:examenTeoricoId')
  update(
    @Param('alumnoId') alumnoId: string,
    @Param('examenTeoricoId') examenTeoricoId: string,
    @Body() updateAlumnorhaceexamenteoricoDto: UpdateAlumnorhaceexamenteoricoDto,
  ) {
    return this.alumnorhaceexamenteoricoService.update(+alumnoId, +examenTeoricoId, updateAlumnorhaceexamenteoricoDto);
  }

  @Delete(':alumnoId/:examenTeoricoId')
  remove(@Param('alumnoId') alumnoId: string, @Param('examenTeoricoId') examenTeoricoId: string) {
    return this.alumnorhaceexamenteoricoService.remove(+alumnoId, +examenTeoricoId);
  }
}