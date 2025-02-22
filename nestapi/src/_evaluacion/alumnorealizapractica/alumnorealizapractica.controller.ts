import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnorealizapracticaService } from './alumnorealizapractica.service';
import { CreateAlumnorealizapracticaDto } from './dto/create-alumnorealizapractica.dto';
import { UpdateAlumnorealizapracticaDto } from './dto/update-alumnorealizapractica.dto';

@Controller('alumnorealizapractica')
export class AlumnorealizapracticaController {
  constructor(private readonly alumnorealizapracticaService: AlumnorealizapracticaService) {}

  @Post()
  create(@Body() createAlumnorealizapracticaDto: CreateAlumnorealizapracticaDto) {
    return this.alumnorealizapracticaService.create(createAlumnorealizapracticaDto);
  }

  @Get()
  findAll() {
    return this.alumnorealizapracticaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnorealizapracticaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnorealizapracticaDto: UpdateAlumnorealizapracticaDto) {
    return this.alumnorealizapracticaService.update(+id, updateAlumnorealizapracticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnorealizapracticaService.remove(+id);
  }
}
