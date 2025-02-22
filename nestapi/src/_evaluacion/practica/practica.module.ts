import { Module } from '@nestjs/common';
import { PracticaService } from './practica.service';
import { PracticaController } from './practica.controller';

@Module({
  controllers: [PracticaController],
  providers: [PracticaService],
})
export class PracticaModule {}
