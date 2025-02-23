import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateHaceDto {
  @IsNotEmpty()
  @IsNumber()
  AlumnoId: number;
  @IsNotEmpty()
  @IsNumber()
  ExamenTeoricoId: number;
  @IsNotEmpty()
  @IsNumber()
  nota: number;
}