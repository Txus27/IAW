import { Injectable } from '@nestjs/common';
import { CreateAlumnohaceexamenteoricoDto } from './dto/create-alumnohaceexamenteorico.dto';
import { UpdateAlumnohaceexamenteoricoDto } from './dto/update-alumnohaceexamenteorico.dto';

@Injectable()
export class AlumnohaceexamenteoricoService {
  create(createAlumnohaceexamenteoricoDto: CreateAlumnohaceexamenteoricoDto) {
    return 'This action adds a new alumnohaceexamenteorico';
  }

  findAll() {
    return `This action returns all alumnohaceexamenteorico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnohaceexamenteorico`;
  }

  update(id: number, updateAlumnohaceexamenteoricoDto: UpdateAlumnohaceexamenteoricoDto) {
    return `This action updates a #${id} alumnohaceexamenteorico`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnohaceexamenteorico`;
  }
}
