import { Injectable } from '@nestjs/common';
import { CreateExamenteoticoDto } from './dto/create-examenteotico.dto';
import { UpdateExamenteoticoDto } from './dto/update-examenteotico.dto';

@Injectable()
export class ExamenteoticoService {
  create(createExamenteoticoDto: CreateExamenteoticoDto) {
    return 'This action adds a new examenteotico';
  }

  findAll() {
    return `This action returns all examenteotico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examenteotico`;
  }

  update(id: number, updateExamenteoticoDto: UpdateExamenteoticoDto) {
    return `This action updates a #${id} examenteotico`;
  }

  remove(id: number) {
    return `This action removes a #${id} examenteotico`;
  }
}
