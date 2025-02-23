import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hace } from './entities/hace.entity';
import { CreateHaceDto } from './dto/create-hace.dto';
import { UpdateHaceDto } from './dto/update-hace.dto';

@Injectable()
export class HaceService {
  constructor(
    @InjectRepository(Hace, 'apitarea')
    private readonly haceRepository: Repository<Hace>,
  ) {}
  async create(createHaceDto: CreateHaceDto): Promise<Hace> {
    const hace = this.haceRepository.create(createHaceDto);
    return await this.haceRepository.save(hace);
  }
  async findAll(): Promise<Hace[]> {
    return await this.haceRepository.find();
  }
  async findOne(AlumnoId: number, idExamenTeorico: number): Promise<Hace> {
    const hace = await this.haceRepository.findOne({
      where: { AlumnoId, idExamenTeorico },
    });
    if (!hace) throw new NotFoundException(
        `Result not found (Student=${AlumnoId}, TheoreticalExam=${idExamenTeorico})`,
      );
    return hace;
  }
  async update(
    AlumnoId: number,
    idExamenTeorico: number,
    updateHaceDto: UpdateHaceDto,
  ): Promise<Hace> {
    const hace = await this.haceRepository.findOne({
      where: { AlumnoId, idExamenTeorico },
    });
    if (!hace) {
      throw new NotFoundException(
        `Result not found (Student=${AlumnoId}, TheoreticalExam=${idExamenTeorico})`,
      );
    }
    Object.assign(hace, updateHaceDto);
    return this.haceRepository.save(hace);
  }
  async remove(AlumnoId: number, idExamenTeorico: number): Promise<string> {
    const hace = await this.haceRepository.findOne({
      where: { AlumnoId, idExamenTeorico },
    });
    if (!hace) throw new NotFoundException(`Result not found (Student=${AlumnoId}, TheoreticalExam=${idExamenTeorico})`,
      );
    await this.haceRepository.remove(hace);
    return `Result (Student=${AlumnoId}, TheoreticalExam=${idExamenTeorico}) successfully deleted`;
  }
}


