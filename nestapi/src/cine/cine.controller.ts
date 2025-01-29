import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { CineService } from './cine.service';
import { CreateCineDto } from './dto/create-cine.dto';
import { UpdateCineDto } from './dto/update-cine.dto';
import { Cine } from './entities/cine.entity';

@Controller('cine')
export class CineController {
  constructor(private readonly cineService: CineService) {}

  @Post()
  async create(@Body() createCineDto: CreateCineDto): Promise<Cine> {
    return this.cineService.create(createCineDto);
  }

  @Get()
  async findAll(): Promise<Cine[]> {
    return this.cineService.findAll();
  }
  //Personalizado
  @Get('titulocine')
  async titulocineQuery(@Query('titulo') titulo:string):Promise<Cine[]>{
        return this.cineService.buscaTitulo(titulo);
  }
  @Get('menosano')
  async menosañoQuery(@Query('año') año:number):Promise<Cine[]>{
        return this.cineService.buscaAño(año);
  }
  //
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cine> {
    return this.cineService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCineDto: UpdateCineDto): Promise<Cine> {
    return this.cineService.update(+id, updateCineDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.cineService.remove(+id);
  }
}
