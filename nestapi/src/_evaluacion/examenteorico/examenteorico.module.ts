import { Module } from '@nestjs/common';
import { ExamenteoricoController } from './examenteorico.controller';
import { ExamenTeorico } from './entities/examenteorico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenTeoricoService } from './examenteorico.service';

@Module({
  imports:[TypeOrmModule.forFeature([ExamenTeorico],'apitarea')],
  controllers: [ExamenteoricoController],
  providers: [ExamenTeoricoService],
})
export class ExamenteoricoModule {}
