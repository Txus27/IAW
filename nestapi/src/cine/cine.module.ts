import { Module } from '@nestjs/common';
import { CineService } from './cine.service';
import { CineController } from './cine.controller';
import { Cine } from './entities/cine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Cine],"cine")],
  controllers: [CineController],
  providers: [CineService],
})
export class CineModule {}
