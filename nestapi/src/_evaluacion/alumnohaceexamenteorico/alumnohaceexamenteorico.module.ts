import { Module } from '@nestjs/common';
import { AlumnohaceexamenteoricoService } from './alumnohaceexamenteorico.service';
import { AlumnohaceexamenteoricoController } from './alumnohaceexamenteorico.controller';

@Module({
  controllers: [AlumnohaceexamenteoricoController],
  providers: [AlumnohaceexamenteoricoService],
})
export class AlumnohaceexamenteoricoModule {}
