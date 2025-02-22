import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class ProfesorDTO {
    @IsNotEmpty()
    id: number;
    @IsString()
    nif: string;
    @IsString()
    nombre: string;
    @IsString()
    apellido1: string;
    @IsString()
    apellido2: string;
    @IsNumber()
    @IsPositive()
    practicas: number[]; 
    @IsNumber()
    @IsPositive()
    examenes: number[]; 
  }