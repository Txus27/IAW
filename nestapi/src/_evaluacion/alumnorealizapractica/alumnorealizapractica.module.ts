import { Module } from '@nestjs/common';
import { AlumnorealizapracticaService } from './alumnorealizapractica.service';
import { AlumnoRealizaPracticaController } from './alumnorealizapractica.controller';
import { Alumno } from '../alumno/entities/alumno.entity';
import { Practica } from '../practica/entities/practica.entity';
import { AlumnoRealizaPractica } from './entities/alumnorealizapractica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([AlumnoRealizaPractica, Practica, Alumno],'base1',),],
  controllers: [AlumnoRealizaPracticaController],
  providers: [AlumnorealizapracticaService],
})
export class AlumnorealizapracticaModule {}
