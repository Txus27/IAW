import { Injectable } from '@nestjs/common';
import { CreateAlumnorhaceexamenteoricoDto } from './dto/create-alumnorhaceexamenteorico.dto';
import { UpdateAlumnorhaceexamenteoricoDto } from './dto/update-alumnorhaceexamenteorico.dto';

@Injectable()
export class AlumnorhaceexamenteoricoService {
  create(createAlumnorhaceexamenteoricoDto: CreateAlumnorhaceexamenteoricoDto) {
    return 'This action adds a new alumnorhaceexamenteorico';
  }

  findAll() {
    return `This action returns all alumnorhaceexamenteorico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnorhaceexamenteorico`;
  }

  update(id: number, updateAlumnorhaceexamenteoricoDto: UpdateAlumnorhaceexamenteoricoDto) {
    return `This action updates a #${id} alumnorhaceexamenteorico`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnorhaceexamenteorico`;
  }
}
