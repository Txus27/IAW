import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfesorDisenaPractica } from './entities/profesordisenapractica.entity';
import { CreateProfesordisenapracticaDto } from './dto/create-profesordisenapractica.dto';
import { UpdateProfesordisenapracticaDto } from './dto/update-profesordisenapractica.dto';

@Injectable()
export class ProfesordisenapracticaService {
  constructor(
    @InjectRepository(ProfesorDisenaPractica, 'base1')
    private readonly profesorDisenaPracticaRepository: Repository<ProfesorDisenaPractica>,
  ) {}

  async create(createProfesordisenapracticaDto: CreateProfesordisenapracticaDto): Promise<ProfesorDisenaPractica> {
    const profesorDisenaPractica = this.profesorDisenaPracticaRepository.create(createProfesordisenapracticaDto);
    return await this.profesorDisenaPracticaRepository.save(profesorDisenaPractica);
  }

  async findAll(): Promise<ProfesorDisenaPractica[]> {
    return await this.profesorDisenaPracticaRepository.find({
      relations: ['profesor', 'practica'],
    });
  }

  async findOne(profesorId: number, practicaId: number): Promise<ProfesorDisenaPractica> {
    const profesorDisenaPractica = await this.profesorDisenaPracticaRepository.findOne({
      where: { profesorId, practicaId },
      relations: ['profesor', 'practica'],
    });

    if (!profesorDisenaPractica) {
      throw new NotFoundException(`Relación profesor-práctica no encontrada`);
    }

    return profesorDisenaPractica;
  }

  async update(profesorId: number, practicaId: number, updateProfesordisenapracticaDto: UpdateProfesordisenapracticaDto): Promise<ProfesorDisenaPractica> {
    await this.profesorDisenaPracticaRepository.update({ profesorId, practicaId }, updateProfesordisenapracticaDto);
    return this.findOne(profesorId, practicaId);
  }

  async remove(profesorId: number, practicaId: number): Promise<void> {
    const result = await this.profesorDisenaPracticaRepository.delete({ profesorId, practicaId });
    if (result.affected === 0) {
      throw new NotFoundException(`Relación profesor-práctica no encontrada`);
    }
  }
}