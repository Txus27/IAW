import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno, 'base1')
    private readonly alumnoRepository: Repository<Alumno>,
  ) {}

 
  async create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {

    const alumno = this.alumnoRepository.create(createAlumnoDto);
 
    return await this.alumnoRepository.save(alumno);
  }

  
  async findAll(): Promise<Alumno[]> {
   
    return await this.alumnoRepository.find({
      relations: ['alumnoshacenexamenteorico', 'alumnorealizapractica'],
    });
  }

  
  async findOne(id: number): Promise<Alumno> {
    return await this.alumnoRepository.findOne({
      where: { id },
      relations: ['alumnoshacenexamenteorico', 'alumnorealizapractica'],
    });
  }


  async update(id: number, updateAlumnoDto: UpdateAlumnoDto): Promise<Alumno> {
    await this.alumnoRepository.update(id, updateAlumnoDto);

    return await this.alumnoRepository.findOne({
      where: { id },
      relations: ['alumnoshacenexamenteorico', 'alumnorealizapractica'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.alumnoRepository.delete(id);
  }
}