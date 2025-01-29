import { PartialType } from '@nestjs/mapped-types';
import { CreateCineDto } from './create-cine.dto';

export class UpdateCineDto extends PartialType(CreateCineDto) {
    titulo: string;
    director: string;
    año: number;
    duracion: number;
}
