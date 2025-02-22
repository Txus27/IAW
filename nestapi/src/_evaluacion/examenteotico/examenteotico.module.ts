import { Module } from '@nestjs/common';
import { ExamenteoticoService } from './examenteotico.service';
import { ExamenteoticoController } from './examenteotico.controller';

@Module({
  controllers: [ExamenteoticoController],
  providers: [ExamenteoticoService],
})
export class ExamenteoticoModule {}
