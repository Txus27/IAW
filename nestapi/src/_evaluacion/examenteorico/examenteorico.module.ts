import { Module } from '@nestjs/common';
import { ExamenteoricoService } from './examenteorico.service';
import { ExamenteoricoController } from './examenteorico.controller';

@Module({
  controllers: [ExamenteoricoController],
  providers: [ExamenteoricoService],
})
export class ExamenteoricoModule {}
