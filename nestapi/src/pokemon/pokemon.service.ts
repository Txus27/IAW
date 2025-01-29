import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  constructor(
      @InjectRepository(Pokemon, 'pokemon') //Aqui le digo a que base de datos quiero acceder
      private pokemonRepository: Repository<Pokemon>
    ) {}
    async create(createPokemonDto: CreatePokemonDto) {
      const pokemon = this.pokemonRepository.create(createPokemonDto);
      return this.pokemonRepository.save(pokemon);
  }

  async findAll(): Promise<Pokemon[]> {
      return this.pokemonRepository.find();
    }
  
    async findOne(id: number): Promise<Pokemon> {
      return this.pokemonRepository.findOne({ where: { id } });
    }
  
    async update(id: number, updatePokemonDto: UpdatePokemonDto): Promise<Pokemon> {
      await this.pokemonRepository.update(id, updatePokemonDto);
      return this.pokemonRepository.findOne({ where: { id } });
    }
  
    async remove(id: number): Promise<string> {
      const pokemon = await this.pokemonRepository.findOne({ where: { id } });
      if (pokemon) {
        await this.pokemonRepository.remove(pokemon);
        return "Elemento de la base de datos eliminado";
      }
      return "Elemento no encontrado";
    }
    
    //Personalizados
    async buscaNombre(nombre:string): Promise<Pokemon[]>{
      return this.pokemonRepository.find({where:{nombre}})
    }
    async buscaTipo(tipo:string): Promise<Pokemon[]>{
      return this.pokemonRepository.find({where:{tipo}})
    }
    async buscaHp(hp:number): Promise<Pokemon[]>{
      return this.pokemonRepository.find({where:{hp:MoreThan(hp)}})
    }
    
}
