import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnorhaceexamenteoricoDto } from './create-alumnorhaceexamenteorico.dto';

export class UpdateAlumnorhaceexamenteoricoDto extends PartialType(CreateAlumnorhaceexamenteoricoDto) {}
