import { Module } from '@nestjs/common';
import { ExamenteoricoService } from './examenteorico.service';
import { ExamenteoricoController } from './examenteorico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenTeorico } from './entities/examenteorico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamenTeorico], 'apitarea')],
  controllers: [ExamenteoricoController],
  providers: [ExamenteoricoService],
})
export class ExamenteoricoModule {}