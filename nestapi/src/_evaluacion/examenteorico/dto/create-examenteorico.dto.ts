import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExamenTeoricoDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;
  @IsNotEmpty()
  @IsNumber()
  numeroPreguntas: number;
}