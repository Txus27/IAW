import { PartialType } from '@nestjs/mapped-types';
import { CreateExamenteoticoDto } from './create-examenteotico.dto';

export class UpdateExamenteoticoDto extends PartialType(CreateExamenteoticoDto) {}
