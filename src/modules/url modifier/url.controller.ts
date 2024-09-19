import { Controller, Post, Body, Get, Param,Res,NotFoundException } from '@nestjs/common';
import {UrlService} from './url.service'
import { UserDto, UserEmailDto } from '../../dto'
import { Response } from 'express'; 

@Controller('v1')
export class urlController {

    constructor(private urlService: UrlService) { }
    
    @Post('shorten')
    async createShortUrl(@Body('url') url: string): Promise<string> {
      return await this.urlService.shortenUrl(url);
    }

    @Get(':shortUrl')
  async redirectToOriginalUrl(@Param('shortUrl') shortUrl: string, @Res() res: Response): Promise<void> {
    try {
      const originalUrl = await this.urlService.findOriginalUrl(shortUrl);
      
      // Redirect to the original URL
      res.redirect(originalUrl);
    } catch (error) {
      throw new NotFoundException('URL not found');
    }
  }

}
