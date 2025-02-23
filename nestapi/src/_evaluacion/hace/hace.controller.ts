import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { HaceService } from './hace.service';
import { CreateHaceDto } from './dto/create-hace.dto';
import { UpdateHaceDto } from './dto/update-hace.dto';

@Controller('hace')
export class HaceController {
  constructor(private readonly haceService: HaceService) {}
  @Post()
  create(@Body() createHaceDto: CreateHaceDto) {
    return this.haceService.create(createHaceDto);
  }
  @Get()
  findAll() {
    return this.haceService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string, @Param('ExamenTeoricoId') ExamenTeoricoId: string) {
    return this.haceService.findOne(+id, +ExamenTeoricoId);
  }
  @Put(':id')
  update(@Param('id') id: string, @Param('ExamenTeoricoId') ExamenTeoricoId: string, @Body() updateHaceDto: UpdateHaceDto) {
    return this.haceService.update(+id, +ExamenTeoricoId, updateHaceDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string, @Param('ExamenTeoricoId') ExamenTeoricoId: string) {
    return this.haceService.remove(+id, +ExamenTeoricoId);
  }
}