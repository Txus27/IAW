import { PartialType } from '@nestjs/mapped-types';
import { CreateExamenteoricoDto } from './create-examenteorico.dto';

export class UpdateExamenteoricoDto extends PartialType(CreateExamenteoricoDto) {}
