import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoRealizaPractica } from './entities/alumnorealizapractica.entity';
import { CreateAlumnorealizapracticaDto } from './dto/create-alumnorealizapractica.dto';
import { UpdateAlumnorealizapracticaDto } from './dto/update-alumnorealizapractica.dto';

@Injectable()
export class AlumnorealizapracticaService {
  constructor(
    @InjectRepository(AlumnoRealizaPractica, 'base1')
    private readonly alumnoRealizaPracticaRepository: Repository<AlumnoRealizaPractica>,
  ) {}

  async create(createAlumnorealizapracticaDto: CreateAlumnorealizapracticaDto): Promise<AlumnoRealizaPractica> {
    const alumnoRealizaPractica = this.alumnoRealizaPracticaRepository.create(createAlumnorealizapracticaDto);
    return await this.alumnoRealizaPracticaRepository.save(alumnoRealizaPractica);
  }

  async findAll(): Promise<AlumnoRealizaPractica[]> {
    return await this.alumnoRealizaPracticaRepository.find({
      relations: ['alumno', 'practica'],
    });
  }

  async findOne(alumnoId: number, practicaId: number): Promise<AlumnoRealizaPractica> {
    return await this.alumnoRealizaPracticaRepository.findOne({
      where: { alumnoId, practicaId },
      relations: ['alumno', 'practica'],
    });
  }

  async update(alumnoId: number, practicaId: number, updateAlumnorealizapracticaDto: UpdateAlumnorealizapracticaDto): Promise<AlumnoRealizaPractica> {
    await this.alumnoRealizaPracticaRepository.update({ alumnoId, practicaId }, updateAlumnorealizapracticaDto);
    return await this.alumnoRealizaPracticaRepository.findOne({
      where: { alumnoId, practicaId },
      relations: ['alumno', 'practica'],
    });
  }

  async remove(alumnoId: number, practicaId: number): Promise<void> {
    await this.alumnoRealizaPracticaRepository.delete({ alumnoId, practicaId });
  }
}