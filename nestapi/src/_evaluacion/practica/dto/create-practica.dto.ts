import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PracticaDTO {
  @IsNotEmpty()
  @IsNumber()  
  id: number;
  @IsString()
  titulo: string;
  @IsString()
  dificultad: string;
}