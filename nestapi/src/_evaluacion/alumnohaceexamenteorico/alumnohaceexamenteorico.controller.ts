import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnohaceexamenteoricoService } from './alumnohaceexamenteorico.service';
import { CreateAlumnohaceexamenteoricoDto } from './dto/create-alumnohaceexamenteorico.dto';
import { UpdateAlumnohaceexamenteoricoDto } from './dto/update-alumnohaceexamenteorico.dto';

@Controller('alumnohaceexamenteorico')
export class AlumnohaceexamenteoricoController {
  constructor(private readonly alumnohaceexamenteoricoService: AlumnohaceexamenteoricoService) {}

  @Post()
  create(@Body() createAlumnohaceexamenteoricoDto: CreateAlumnohaceexamenteoricoDto) {
    return this.alumnohaceexamenteoricoService.create(createAlumnohaceexamenteoricoDto);
  }

  @Get()
  findAll() {
    return this.alumnohaceexamenteoricoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnohaceexamenteoricoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnohaceexamenteoricoDto: UpdateAlumnohaceexamenteoricoDto) {
    return this.alumnohaceexamenteoricoService.update(+id, updateAlumnohaceexamenteoricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnohaceexamenteoricoService.remove(+id);
  }
}
