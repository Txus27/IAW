import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Realiza } from './entities/realiza.entity';
import { CreateRealizaDto } from './dto/create-realiza.dto';
import { UpdateRealizaDto } from './dto/update-realiza.dto';

@Injectable()
export class RealizaService {
  constructor(
    @InjectRepository(Realiza, 'apitarea')
    private readonly realizaRepository: Repository<Realiza>,
  ) {}

  async create(createRealizaDto: CreateRealizaDto): Promise<Realiza> {
    const realiza = this.realizaRepository.create(createRealizaDto);
    return await this.realizaRepository.save(realiza);
  }

  async findAll(): Promise<Realiza[]> {
    return await this.realizaRepository.find();
  }

  async findOne(
    AlumnoId: number,
    PracticaId: number,
    fecha: string,
  ): Promise<Realiza> {
    const fechaPractica = new Date(fecha);
    const realiza = await this.realizaRepository.findOne({
      where: { AlumnoId, PracticaId, fecha: fechaPractica },
    });
    if (!realiza) {
      throw new NotFoundException(
        `Realiza no encontrado (Alumno=${AlumnoId}, Práctica=${PracticaId}, Fecha=${fecha})`,
      );
    }
    return realiza;
  }
  async update(
    AlumnoId: number,
    PracticaId: number,
    fecha: string,
    updateRealizaDto: UpdateRealizaDto,
  ): Promise<Realiza> {
    const fechaPractica = new Date(fecha);
    const realiza = await this.realizaRepository.findOne({
      where: { AlumnoId, PracticaId, fecha: fechaPractica },
    });
    if (!realiza) {
      throw new NotFoundException(
        `Realiza no encontrado (Alumno=${AlumnoId}, Práctica=${PracticaId}, Fecha=${fecha})`,
      );
    }
    Object.assign(realiza, updateRealizaDto);
    return this.realizaRepository.save(realiza);
  }
  async remove(
    AlumnoId: number,
    PracticaId: number,
    fecha: string,
  ): Promise<string> {
    const fechaPractica = new Date(fecha);
    const realiza = await this.realizaRepository.findOne({
      where: { AlumnoId, PracticaId, fecha: fechaPractica },
    });
    if (!realiza) {throw new NotFoundException(
        `Realiza no encontrado (Alumno=${AlumnoId}, Práctica=${PracticaId}, Fecha=${fecha})`,
      );
    }
    await this.realizaRepository.remove(realiza);
    return `Realiza (Alumno=${AlumnoId}, Práctica=${PracticaId}, Fecha=${fecha}) eliminado correctamente`;
  }
}