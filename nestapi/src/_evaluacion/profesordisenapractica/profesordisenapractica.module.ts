import { Module } from '@nestjs/common';
import { ProfesordisenapracticaService } from './profesordisenapractica.service';
import { ProfesordisenapracticaController } from './profesordisenapractica.controller';

@Module({
  controllers: [ProfesordisenapracticaController],
  providers: [ProfesordisenapracticaService],
})
export class ProfesordisenapracticaModule {}
