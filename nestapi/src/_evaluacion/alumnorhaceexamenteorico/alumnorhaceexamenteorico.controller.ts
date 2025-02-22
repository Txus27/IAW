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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnorhaceexamenteoricoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnorhaceexamenteoricoDto: UpdateAlumnorhaceexamenteoricoDto) {
    return this.alumnorhaceexamenteoricoService.update(+id, updateAlumnorhaceexamenteoricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnorhaceexamenteoricoService.remove(+id);
  }
}
