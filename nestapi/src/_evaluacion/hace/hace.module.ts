import { Module } from '@nestjs/common';
import { HaceService } from './hace.service';
import { HaceController } from './hace.controller';
import { Hace } from './entities/hace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from '../alumno/entities/alumno.entity';
import { ExamenTeorico } from '../examenteorico/entities/examenteorico.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Hace,Alumno,ExamenTeorico],'apitarea')],
  controllers: [HaceController],
  providers: [HaceService],
})
export class HaceModule {}