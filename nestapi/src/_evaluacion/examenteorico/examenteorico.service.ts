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
    if (!examen) throw new Error(`No se encuentra el examen con ID ${id} `);
    
    return examen;
  }
  async update(id: number, updateExamenTeoricoDto: UpdateExamenTeoricoDto): Promise<ExamenTeorico> {
    const examen = await this.examenTeoricoRepository.findOne({ where: { id } });
    if (!examen) throw new NotFoundException (`No se encuentra el examen con ID ${id} `);
    Object.assign(examen, updateExamenTeoricoDto);
    return this.examenTeoricoRepository.save(examen);
  }
  async remove(id: number): Promise<string> {
    const examen = await this.examenTeoricoRepository.findOne({ where: { id } });
    if (!examen) throw new NotFoundException(`No se encuentra el examen con ID ${id} `);
    await this.examenTeoricoRepository.remove(examen);
    return `Examen con ID ${id} borrado`;
  }
}