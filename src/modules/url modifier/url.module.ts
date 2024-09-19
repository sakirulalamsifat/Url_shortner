import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { urlController } from './url.controller';
import {urlProviders} from './url.providers'
import {DatabaseModule} from '../../config/database/database.module'

@Module({
  providers: [UrlService,...urlProviders], 
  imports:[DatabaseModule],
  exports: [UrlService],
  controllers: [urlController]
})
export class UrlModule {}
