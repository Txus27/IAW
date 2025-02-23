import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDisenaDto {
  @IsNotEmpty()
  @IsNumber()
  idPractica: number;
  @IsNotEmpty()
  @IsNumber()
  idProfesor: number;
  @IsNotEmpty()
  @IsDateString()
  fecha: string;
}
