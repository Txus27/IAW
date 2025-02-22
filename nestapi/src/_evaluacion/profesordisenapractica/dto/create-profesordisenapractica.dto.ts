import { IsDate, IsNotEmpty } from "class-validator";

export class ProfesorDisenaPracticaDTO {
    @IsNotEmpty()
    profesorId: number;
    @IsNotEmpty()
    practicaId: number;
    @IsDate()
    fecha: Date;
  }