import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  async create(@Body() createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }
  
  //Personalizado
  @Get('nombrepokemon')
  async nombrepokemonQuery(@Query('nombre') nombre:string):Promise<Pokemon[]>{
        return this.pokemonService.buscaNombre(nombre);
  }
  @Get('tipopokemon')
  async tipopokemonQuery(@Query('tipo') tipo:string):Promise<Pokemon[]>{
        return this.pokemonService.buscaTipo(tipo);
  }
  @Get('hp')
  async hpQuery(@Query('hp') hp:number):Promise<Pokemon[]>{
        return this.pokemonService.buscaHp(hp);
  }
  

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pokemon> {
    return this.pokemonService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.update(+id, updatePokemonDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.pokemonService.remove(+id);
  }
}