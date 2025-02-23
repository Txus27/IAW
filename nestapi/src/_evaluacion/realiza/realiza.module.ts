import { Module } from '@nestjs/common';
import { RealizaService } from './realiza.service';
import { RealizaController } from './realiza.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Realiza } from './entities/realiza.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Realiza], 'apitarea'), 
  ],
  controllers: [RealizaController],
  providers: [RealizaService],
})
export class RealizaModule {}
