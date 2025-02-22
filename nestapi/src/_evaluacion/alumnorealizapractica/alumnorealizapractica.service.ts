import { Injectable } from '@nestjs/common';
import { CreateAlumnorealizapracticaDto } from './dto/create-alumnorealizapractica.dto';
import { UpdateAlumnorealizapracticaDto } from './dto/update-alumnorealizapractica.dto';

@Injectable()
export class AlumnorealizapracticaService {
  create(createAlumnorealizapracticaDto: CreateAlumnorealizapracticaDto) {
    return 'This action adds a new alumnorealizapractica';
  }

  findAll() {
    return `This action returns all alumnorealizapractica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnorealizapractica`;
  }

  update(id: number, updateAlumnorealizapracticaDto: UpdateAlumnorealizapracticaDto) {
    return `This action updates a #${id} alumnorealizapractica`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnorealizapractica`;
  }
}
