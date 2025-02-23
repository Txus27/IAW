import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno, 'apitarea')
    private readonly alumnoRepository: Repository<Alumno>,
  ) {}
  async create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    const alumno = this.alumnoRepository.create(createAlumnoDto);
    return await this.alumnoRepository.save(alumno);
  }
  async findAll(): Promise<Alumno[]> {
    return await this.alumnoRepository.find();
  }
  async findOne(id: number): Promise<Alumno> {
    const alumno = await this.alumnoRepository.findOne({ where: { id } });
    if (!alumno) throw new NotFoundException(`User with id ${id} not found`);
    return alumno;
  }
  async update(id: number, updateAlumnoDto: UpdateAlumnoDto): Promise<Alumno> {
    const alumno = await this.alumnoRepository.findOne({ where: { id } });
    if (!alumno) throw new NotFoundException(`User with id ${id} not found`);
    Object.assign(alumno, updateAlumnoDto);
    return this.alumnoRepository.save(alumno);
  }
  async remove(id: number): Promise<string> {
    const alumno = await this.alumnoRepository.findOne({ where: { id } });
    if (!alumno) throw new Error(`Alumno con ID ${id} no encontrado`);
    await this.alumnoRepository.remove(alumno);
    return `User with id ${id} not found`;
  }
}










// import { Injectable } from '@nestjs/common';
// import { CreateAlumnoDto } from './dto/create-alumno.dto';
// import { UpdateAlumnoDto } from './dto/update-alumno.dto';

// @Injectable()
// export class AlumnoService {
//   create(createAlumnoDto: CreateAlumnoDto) {
//     return 'This action adds a new alumno';
//   }

//   findAll() {
//     return `This action returns all alumno`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} alumno`;
//   }

//   update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
//     return `This action updates a #${id} alumno`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} alumno`;
//   }
// }
