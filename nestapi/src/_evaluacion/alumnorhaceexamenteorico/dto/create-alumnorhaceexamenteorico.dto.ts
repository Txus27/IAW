import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAlumnorhaceexamenteoricoDto {
    @IsNotEmpty()
    @IsNumber()
    alumnoId: number;
    @IsNotEmpty()
    @IsNumber()
    examenTeoricoId: number;
    @IsNumber()
    nota: number;
  }