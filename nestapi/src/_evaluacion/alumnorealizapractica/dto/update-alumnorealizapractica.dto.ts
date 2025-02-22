import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnorealizapracticaDto } from './create-alumnorealizapractica.dto';

export class UpdateAlumnorealizapracticaDto extends PartialType(CreateAlumnorealizapracticaDto) {}
