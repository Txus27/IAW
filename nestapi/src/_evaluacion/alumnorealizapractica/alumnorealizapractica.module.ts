import { Module } from '@nestjs/common';
import { AlumnorealizapracticaService } from './alumnorealizapractica.service';
import { AlumnorealizapracticaController } from './alumnorealizapractica.controller';

@Module({
  controllers: [AlumnorealizapracticaController],
  providers: [AlumnorealizapracticaService],
})
export class AlumnorealizapracticaModule {}
