import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';
import { Alumno } from './entities/alumno.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Alumno],'apitarea')],
  controllers: [AlumnoController],
  providers: [AlumnoService],
})
export class AlumnoModule {}