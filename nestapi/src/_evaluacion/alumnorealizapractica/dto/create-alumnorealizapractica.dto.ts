import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class AlumnoRealizaPracticaDTO {
    @IsNotEmpty()
    @IsNumber()
    alumnoId: number;
    @IsNotEmpty()
    @IsNumber()
    practicaId: number;
    @IsDate()
    fecha: Date;
    @IsNumber()
    nota: number;
  }