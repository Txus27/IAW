import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExamenteoricoDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
    @IsString()
    titulo: string;
    @IsNumber()
    numeroPreguntas: number;
    @IsDate()
    fecha: Date;
  }