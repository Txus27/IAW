import { Module } from '@nestjs/common';
import { AlumnorhaceexamenteoricoService } from './alumnorhaceexamenteorico.service';
import { AlumnorhaceexamenteoricoController } from './alumnorhaceexamenteorico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from '../alumno/entities/alumno.entity';
import { ExamenTeorico } from '../examenteorico/entities/examenteorico.entity';
import { AlumnoHaceExamenTeorico } from './entities/alumnorhaceexamenteorico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlumnoHaceExamenTeorico, Alumno, ExamenTeorico], 'base1')],
  controllers: [AlumnorhaceexamenteoricoController],
  providers: [AlumnorhaceexamenteoricoService],
})
export class AlumnorhaceexamenteoricoModule {}