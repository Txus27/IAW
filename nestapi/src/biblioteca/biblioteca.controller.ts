import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { Biblioteca } from './entities/biblioteca.entity';
// CRUD base

@Controller('biblioteca')
export class BibliotecaController {
  constructor(private readonly bibliotecaService: BibliotecaService) {}

  @Post()
  async create(@Body() createBibliotecaDto: CreateBibliotecaDto):Promise<Biblioteca> {
    return this.bibliotecaService.create(createBibliotecaDto);
  }
  /*
  //NUEVA PARA EJEMPLO
  @Get('query')
    async rutaQuery(@Query('articulo') articulo:string, @Query('precio',ParseFloatPipe) precio:number) :string{
        return `El producto ${articulo} cuesta ${precio} €`;
    }
 */
  @Get()
  async findAll(): Promise<Biblioteca[]> {
    return this.bibliotecaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Biblioteca> {
    return this.bibliotecaService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBibliotecaDto: UpdateBibliotecaDto): Promise<Biblioteca> {
    return this.bibliotecaService.update(+id, updateBibliotecaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.bibliotecaService.remove(+id);
  }
}
