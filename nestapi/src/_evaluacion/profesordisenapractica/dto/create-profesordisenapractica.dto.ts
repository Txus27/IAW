import { IsDate, IsNotEmpty } from "class-validator";

export class CreateProfesordisenapracticaDto {
    @IsNotEmpty()
    profesorId: number;
    @IsNotEmpty()
    practicaId: number;
    @IsDate()
    fecha: Date;
  }