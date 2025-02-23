import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRealizaDto {
  @IsNotEmpty()
  @IsNumber()
  AlumnoId: number;
  @IsNotEmpty()
  @IsNumber()
  PracticaId: number;
  @IsNotEmpty()
  @IsDateString()
  fecha: string;
  @IsNotEmpty()
  @IsNumber()
  nota: number;
}