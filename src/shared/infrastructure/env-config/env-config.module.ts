import { ConfigService } from '@nestjs/config';
import { EnvConfigService } from './env-config.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [EnvConfigService, ConfigService],
})
export class EnvConfigModule {}
