import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesordisenapracticaDto } from './create-profesordisenapractica.dto';

export class UpdateProfesordisenapracticaDto extends PartialType(CreateProfesordisenapracticaDto) {}
