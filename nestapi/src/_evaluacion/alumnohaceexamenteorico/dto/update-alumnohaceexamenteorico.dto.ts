import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnohaceexamenteoricoDto } from './create-alumnohaceexamenteorico.dto';

export class UpdateAlumnohaceexamenteoricoDto extends PartialType(CreateAlumnohaceexamenteoricoDto) {}
