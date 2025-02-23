import { PartialType } from '@nestjs/mapped-types';
import { CreateDisenaDto } from './create-disena.dto';

export class UpdateDisenaDto extends PartialType(CreateDisenaDto) {}
