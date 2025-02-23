import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfesorDto {
  @IsNotEmpty()
  @IsString()
  nif: string;
  @IsString()
  nombre: string;
  @IsString()
  apellido1: string;
  @IsString()
  apellido2: string;
}
