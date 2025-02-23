import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Practica } from './entities/practica.entity';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica, 'base1')
    private readonly practicaRepository: Repository<Practica>,
  ) {}

  async create(createPracticaDto: CreatePracticaDto): Promise<Practica> {
    const practica = this.practicaRepository.create(createPracticaDto);
    return await this.practicaRepository.save(practica);
  }

  async findAll(): Promise<Practica[]> {
    return await this.practicaRepository.find({
      relations: ['alumnosRealizanPractica', 'profesoresDisenanPractica'],
    });
  }

  async findOne(id: number): Promise<Practica> {
    const practica = await this.practicaRepository.findOne({
      where: { id },
      relations: ['alumnosRealizanPractica', 'profesoresDisenanPractica'],
    });

    if (!practica) {
      throw new NotFoundException(`Práctica con ID ${id} no encontrada`);
    }

    return practica;
  }

  async update(id: number, updatePracticaDto: UpdatePracticaDto): Promise<Practica> {
    await this.practicaRepository.update(id, updatePracticaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.practicaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Práctica con ID ${id} no encontrada`);
    }
  }
}