import { Injectable } from '@nestjs/common';
import { CreateCineDto } from './dto/create-cine.dto';
import { UpdateCineDto } from './dto/update-cine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { Cine } from './entities/cine.entity';

@Injectable()
export class CineService {
  constructor(
        @InjectRepository(Cine, 'cine') //Aqui le digo a que base de datos quiero acceder
        private cineRepository: Repository<Cine>
      ) {}
   async create(createCineDto: CreateCineDto) {
        const Cine = this.cineRepository.create(createCineDto);
        return this.cineRepository.save(Cine);
    }
  
    async findAll(): Promise<Cine[]> {
        return this.cineRepository.find();
      }
    
      async findOne(id: number): Promise<Cine> {
        return this.cineRepository.findOne({ where: { id } });
      }
    
      async update(id: number, updateCineDto: UpdateCineDto): Promise<Cine> {
        await this.cineRepository.update(id, updateCineDto);
        return this.cineRepository.findOne({ where: { id } });
      }
    
      async remove(id: number): Promise<string> {
        const Cine = await this.cineRepository.findOne({ where: { id } });
        if (Cine) {
          await this.cineRepository.remove(Cine);
          return "Elemento de la base de datos eliminado";
        }
        return "Elemento no encontrado";
      }
      //Personalizados
      async buscaTitulo(titulo:string): Promise<Cine[]>{
      return this.cineRepository.find({where:{titulo}})
      }
      async buscaAño(año:number): Promise<Cine[]>{
      return this.cineRepository.find({where:{año:LessThan(año)}})
      }
}
