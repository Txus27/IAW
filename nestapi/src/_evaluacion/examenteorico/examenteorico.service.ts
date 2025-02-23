import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExamenTeoricoDto } from './dto/create-examenteorico.dto';
import { UpdateExamenTeoricoDto } from './dto/update-examenteorico.dto';
import { ExamenTeorico } from './entities/examenteorico.entity';

@Injectable()
export class ExamenTeoricoService {
  constructor(
    @InjectRepository(ExamenTeorico, 'apitarea')
    private readonly examenTeoricoRepository: Repository<ExamenTeorico>,
  ) {}
  async create(createExamenTeoricoDto: CreateExamenTeoricoDto): Promise<ExamenTeorico> {
    const examen = this.examenTeoricoRepository.create(createExamenTeoricoDto);
    return await this.examenTeoricoRepository.save(examen);
  }
  async findAll(): Promise<ExamenTeorico[]> {
    return await this.examenTeoricoRepository.find();
  }
  async findOne(id: number): Promise<ExamenTeorico> {
    const examen = await this.examenTeoricoRepository.findOne({ where: { id } });
    if (!examen) throw new Error(`Theoretical Exam with ID ${id} not found`);
    
    return examen;
  }
  async update(id: number, updateExamenTeoricoDto: UpdateExamenTeoricoDto): Promise<ExamenTeorico> {
    const examen = await this.examenTeoricoRepository.findOne({ where: { id } });
    if (!examen) throw new NotFoundException (`Theoretical Exam with ID ${id} not found`);
    Object.assign(examen, updateExamenTeoricoDto);
    return this.examenTeoricoRepository.save(examen);
  }
  async remove(id: number): Promise<string> {
    const examen = await this.examenTeoricoRepository.findOne({ where: { id } });
    if (!examen) throw new NotFoundException(`Theoretical Exam with ID ${id} not found`);
    await this.examenTeoricoRepository.remove(examen);
    return `Theoretical Exam with ID ${id} successfully deleted`;
  }
}