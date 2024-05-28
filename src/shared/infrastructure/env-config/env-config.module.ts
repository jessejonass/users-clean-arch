import { EnvConfigService } from './env-config.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule {}
