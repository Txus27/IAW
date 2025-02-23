import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DisenaService } from './disena.service';
import { CreateDisenaDto } from './dto/create-disena.dto';
import { UpdateDisenaDto } from './dto/update-disena.dto';

@Controller('disena')
export class DisenaController {
  constructor(private readonly disenaService: DisenaService) {}
  @Post()
  create(@Body() createDisenaDto: CreateDisenaDto) {
    return this.disenaService.create(createDisenaDto);
  }
  @Get()
  findAll() {
    return this.disenaService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string, @Param('PracticaId') PracticaId: string, @Param('fecha') fecha: string) {
    return this.disenaService.findOne(+id, +PracticaId, fecha);
  }
  @Put(':id')
  update(@Param('id') id: string, @Param('PracticaId') PracticaId: string, @Param('fecha') fecha: string, @Body() updateDisenaDto: UpdateDisenaDto) {
    return this.disenaService.update(+id, +PracticaId, fecha, updateDisenaDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string, @Param('PracticaId') PracticaId: string, @Param('fecha') fecha: string) {
    return this.disenaService.remove(+id, +PracticaId, fecha);
  }
}
