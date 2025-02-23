import { Module } from '@nestjs/common';
import { ProfesordisenapracticaService } from './profesordisenapractica.service';
import { ProfesordisenapracticaController } from './profesordisenapractica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorDisenaPractica } from './entities/profesordisenapractica.entity';
import { Profesor } from '../profesor/entities/profesor.entity';
import { Practica } from '../practica/entities/practica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfesorDisenaPractica, Profesor, Practica], 'apitarea')],
  controllers: [ProfesordisenapracticaController],
  providers: [ProfesordisenapracticaService],
})
export class ProfesordisenapracticaModule {}