import { Module } from '@nestjs/common';
import { AlumnorhaceexamenteoricoService } from './alumnorhaceexamenteorico.service';
import { AlumnorhaceexamenteoricoController } from './alumnorhaceexamenteorico.controller';

@Module({
  controllers: [AlumnorhaceexamenteoricoController],
  providers: [AlumnorhaceexamenteoricoService],
})
export class AlumnorhaceexamenteoricoModule {}
