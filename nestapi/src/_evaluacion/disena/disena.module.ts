import { Module } from '@nestjs/common';
import { DisenaService } from './disena.service';
import { DisenaController } from './disena.controller';
import { Disena } from './entities/disena.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from '../profesor/entities/profesor.entity';
import { Practica } from '../practica/entities/practica.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Disena,Profesor, Practica],'apitarea')],
  controllers: [DisenaController],
  providers: [DisenaService],
})
export class DisenaModule {}
