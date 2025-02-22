import { Injectable } from '@nestjs/common';
import { CreateExamenteoricoDto } from './dto/create-examenteorico.dto';
import { UpdateExamenteoricoDto } from './dto/update-examenteorico.dto';

@Injectable()
export class ExamenteoricoService {
  create(createExamenteoricoDto: CreateExamenteoricoDto) {
    return 'This action adds a new examenteorico';
  }

  findAll() {
    return `This action returns all examenteorico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examenteorico`;
  }

  update(id: number, updateExamenteoricoDto: UpdateExamenteoricoDto) {
    return `This action updates a #${id} examenteorico`;
  }

  remove(id: number) {
    return `This action removes a #${id} examenteorico`;
  }
}
