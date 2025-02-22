import { Injectable } from '@nestjs/common';
import { CreateProfesordisenapracticaDto } from './dto/create-profesordisenapractica.dto';
import { UpdateProfesordisenapracticaDto } from './dto/update-profesordisenapractica.dto';

@Injectable()
export class ProfesordisenapracticaService {
  create(createProfesordisenapracticaDto: CreateProfesordisenapracticaDto) {
    return 'This action adds a new profesordisenapractica';
  }

  findAll() {
    return `This action returns all profesordisenapractica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profesordisenapractica`;
  }

  update(id: number, updateProfesordisenapracticaDto: UpdateProfesordisenapracticaDto) {
    return `This action updates a #${id} profesordisenapractica`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesordisenapractica`;
  }
}
