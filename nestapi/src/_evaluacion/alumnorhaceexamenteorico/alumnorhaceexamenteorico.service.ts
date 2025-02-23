import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlumnorhaceexamenteoricoDto } from './dto/create-alumnorhaceexamenteorico.dto';
import { UpdateAlumnorhaceexamenteoricoDto } from './dto/update-alumnorhaceexamenteorico.dto';
import { AlumnoHaceExamenTeorico } from './entities/alumnohaceexamenteorico.entity';

@Injectable()
export class AlumnorhaceexamenteoricoService {
  constructor(
    @InjectRepository(AlumnoHaceExamenTeorico, 'base1')
    private readonly alumnoHaceExamenTeoricoRepository: Repository<AlumnoHaceExamenTeorico>,
  ) {}

  async create(createAlumnoHaceExamenTeoricoDto: CreateAlumnorhaceexamenteoricoDto): Promise<AlumnoHaceExamenTeorico> {
    const nuevoRegistro = this.alumnoHaceExamenTeoricoRepository.create(createAlumnoHaceExamenTeoricoDto);
    return await this.alumnoHaceExamenTeoricoRepository.save(nuevoRegistro);
  }

  async findAll(): Promise<AlumnoHaceExamenTeorico[]> {
    return await this.alumnoHaceExamenTeoricoRepository.find({
      relations: ['alumno', 'examenTeorico'],
    });
  }

  async findOne(alumnoId: number, examenTeoricoId: number): Promise<AlumnoHaceExamenTeorico> {
    const registro = await this.alumnoHaceExamenTeoricoRepository.findOne({
      where: { alumnoId, examenTeoricoId },
      relations: ['alumno', 'examenTeorico'],
    });

    if (!registro) {
      throw new NotFoundException(
        `No se encontró el registro del alumno con ID ${alumnoId} en el examen teórico con ID ${examenTeoricoId}`,
      );
    }

    return registro;
  }

  async update(alumnoId: number, examenTeoricoId: number, updateAlumnoHaceExamenTeoricoDto: UpdateAlumnorhaceexamenteoricoDto): Promise<AlumnoHaceExamenTeorico> {
    await this.findOne(alumnoId, examenTeoricoId);

    await this.alumnoHaceExamenTeoricoRepository.update(
      { alumnoId, examenTeoricoId },
      updateAlumnoHaceExamenTeoricoDto,
    );

    return await this.findOne(alumnoId, examenTeoricoId);
  }

  async remove(alumnoId: number, examenTeoricoId: number): Promise<void> {
    const result = await this.alumnoHaceExamenTeoricoRepository.delete({
      alumnoId: alumnoId,
      examenTeoricoId: examenTeoricoId,
    });

    if (result.affected === 0) {
      throw new NotFoundException(
        `No se pudo eliminar el registro del alumno con ID ${alumnoId} en el examen teórico con ID ${examenTeoricoId}`,
      );
    }
  }
}