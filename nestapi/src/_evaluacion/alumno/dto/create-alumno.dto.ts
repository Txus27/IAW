import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAlumnoDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
    @IsString()
    nif: string;
    @IsString()
    grupo: string;
    @IsString()
    nombre: string;
    @IsString()
    apellido1: string;
    @IsString()
    apellido2: string;
    @IsNumber()
    practicas: number[]; 
    @IsNumber()
    examenes: number[]; 
  }