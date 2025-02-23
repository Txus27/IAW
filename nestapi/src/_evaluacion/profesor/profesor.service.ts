import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './entities/profesor.entity';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';



@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor, 'apitarea')
    private readonly profesorRepository: Repository<Profesor>,
  ) {}

  async create(createProfesorDto: CreateProfesorDto): Promise<Profesor> {
    const profesor = this.profesorRepository.create(createProfesorDto);
    return await this.profesorRepository.save(profesor);
  }

  async findAll(): Promise<Profesor[]> {
    return await this.profesorRepository.find({
      relations: ['practicas', 'examenes'],
    });
  }

  async findOne(id: number): Promise<Profesor> {
    const profesor = await this.profesorRepository.findOne({
      where: { id },
      relations: ['practicas', 'examenes'],
    });

    if (!profesor) {
      throw new NotFoundException(`Profesor con ID ${id} no encontrado`);
    }

    return profesor;
  }

  async update(id: number, updateProfesorDto: UpdateProfesorDto): Promise<Profesor> {
    const profesor = await this.findOne(id);
    this.profesorRepository.merge(profesor, updateProfesorDto);
    return await this.profesorRepository.save(profesor);
}

  async remove(id: number): Promise<void> {
    const result = await this.profesorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Profesor con ID ${id} no encontrado`);
    }
  }
}