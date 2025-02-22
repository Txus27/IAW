import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamenteoticoService } from './examenteotico.service';
import { CreateExamenteoticoDto } from './dto/create-examenteotico.dto';
import { UpdateExamenteoticoDto } from './dto/update-examenteotico.dto';

@Controller('examenteotico')
export class ExamenteoticoController {
  constructor(private readonly examenteoticoService: ExamenteoticoService) {}

  @Post()
  create(@Body() createExamenteoticoDto: CreateExamenteoticoDto) {
    return this.examenteoticoService.create(createExamenteoticoDto);
  }

  @Get()
  findAll() {
    return this.examenteoticoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenteoticoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamenteoticoDto: UpdateExamenteoticoDto) {
    return this.examenteoticoService.update(+id, updateExamenteoticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenteoticoService.remove(+id);
  }
}
