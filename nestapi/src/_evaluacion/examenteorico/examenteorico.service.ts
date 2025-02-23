import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamenTeorico } from './entities/examenteorico.entity';
import { CreateExamenteoricoDto } from './dto/create-examenteorico.dto';
import { UpdateExamenteoricoDto } from './dto/update-examenteorico.dto';

@Injectable()
export class ExamenteoricoService {
  constructor(
    @InjectRepository(ExamenTeorico, 'base1')
    private readonly examenTeoricoRepository: Repository<ExamenTeorico>,
  ) {}

  async create(createExamenteoricoDto: CreateExamenteoricoDto): Promise<ExamenTeorico> {
    const examenTeorico = this.examenTeoricoRepository.create(createExamenteoricoDto);
    return await this.examenTeoricoRepository.save(examenTeorico);
  }

  async findAll(): Promise<ExamenTeorico[]> {
    return await this.examenTeoricoRepository.find({
      relations: ['alumnosHacenExamenTeorico'],
    });
  }

  async findOne(id: number): Promise<ExamenTeorico> {
    const examenTeorico = await this.examenTeoricoRepository.findOne({
      where: { id },
      relations: ['alumnosHacenExamenTeorico'],
    });

    if (!examenTeorico) {
      throw new NotFoundException(`Examen teórico con ID ${id} no encontrado`);
    }

    return examenTeorico;
  }

  async update(id: number, updateExamenteoricoDto: UpdateExamenteoricoDto): Promise<ExamenTeorico> {
    await this.examenTeoricoRepository.update(id, updateExamenteoricoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.examenTeoricoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Examen teórico con ID ${id} no encontrado`);
    }
  }
}