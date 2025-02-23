import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Disena } from './entities/disena.entity';
import { CreateDisenaDto } from './dto/create-disena.dto';
import { UpdateDisenaDto } from './dto/update-disena.dto';

@Injectable()
export class DisenaService {
  constructor(
    @InjectRepository(Disena, 'apitarea')
    private readonly disenaRepository: Repository<Disena>,
  ) {}
  async create(createDisenaDto: CreateDisenaDto): Promise<Disena> {
    const disena = this.disenaRepository.create(createDisenaDto);
    return await this.disenaRepository.save(disena);
  }
  async findAll(): Promise<Disena[]> {
    return await this.disenaRepository.find();
  }
  async findOne(
    idProfesor: number,
    idPractica: number,
    fecha: string,
  ): Promise<Disena> {
    const fechaConvertida = new Date(fecha);
    const disena = await this.disenaRepository.findOne({
      where: { idProfesor, idPractica, fecha: fechaConvertida },
    });
    if (!disena) {
      throw new NotFoundException(`Design not found (Professor=${idProfesor}, Practice=${idPractica}, Date=${fecha})`,
      );
    }
    return disena;
  }
  async update(
    idProfesor: number,
    idPractica: number,
    fecha: string,
    updateDisenaDto: UpdateDisenaDto,
  ): Promise<Disena> {
    const fechaConvertida = new Date(fecha);
    const disena = await this.disenaRepository.findOne({
      where: { idProfesor, idPractica, fecha: fechaConvertida },
    });
    if (!disena) {
      throw new NotFoundException(
        `Design not found (Professor=${idProfesor}, Practice=${idPractica}, Date=${fecha})`,
      );
    }
    Object.assign(disena, updateDisenaDto);
    return this.disenaRepository.save(disena);
  }
  async remove(
    idProfesor: number,
    idPractica: number,
    fecha: string,
  ): Promise<string> {
    const fechaConvertida = new Date(fecha);
    const disena = await this.disenaRepository.findOne({
      where: { idProfesor, idPractica, fecha: fechaConvertida },
    });
    if (!disena) {
      throw new NotFoundException(`Design not found (Professor=${idProfesor}, Practice=${idPractica}, Date=${fecha})`,
      );
    }
    await this.disenaRepository.remove(disena);
    return `Design (Professor=${idProfesor}, Practice=${idPractica}, Date=${fecha}) successfully deleted`;
  }
}

