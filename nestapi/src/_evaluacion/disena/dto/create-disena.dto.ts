import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDisenaDto {
  @IsNotEmpty()
  @IsNumber()
  PracticaId: number;
  @IsNotEmpty()
  @IsNumber()
  ProfesorId: number;
  @IsNotEmpty()
  @IsDateString()
  fecha: string;
}