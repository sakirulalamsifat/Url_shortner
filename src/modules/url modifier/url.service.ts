import { Injectable, Inject,NotFoundException } from '@nestjs/common';
import { UrlModel} from '../../models';
import { USER_REPOSITORY, DATABASE_CONNECTION, URLS } from '../../config/constants';
import { Sequelize } from 'sequelize-typescript';
import { response } from 'express';
import {Op} from 'sequelize'

@Injectable() 
export class UrlService { 

    private readonly characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private readonly base = this.characters.length;
    constructor(
        @Inject(URLS) private readonly urls: typeof UrlModel,
        @Inject(DATABASE_CONNECTION) private DB: Sequelize

    ) { }


    async shortenUrl(original_url: string): Promise<string> {
        // Validate the original URL before proceeding
        if (!this.isValidUrl(original_url)) {
          throw new Error('Invalid URL');
        }
    
        // Check if the URL already exists in the database
        let existingUrl = await this.urls.findOne({
          where: { original_url },
        });
        if (existingUrl) {
          return this.constructFullShortUrl(existingUrl.short_url);
        }
    
        // Generate a 6-character short URL
        let shortUrl = this.generateShortUrl();
    
        // Ensure the generated short URL is unique in the database
        while (await this.isShortUrlExists(shortUrl)) {
          shortUrl = this.generateShortUrl();
        }
    
        // Store the new short URL and original URL in the database
        const newUrl =await this.urls.create({ original_url, short_url:shortUrl });
        //await this.urls.save(newUrl);
    
        return this.constructFullShortUrl(shortUrl);
      }
    
      // Function to generate a random 6-character short URL
      private generateShortUrl(): string {
          let shortUrl = '';
          let shortUrlLength=Number(process.env.SHORT_URL_LENGTH)
        for (let i = 0; i < shortUrlLength; i++) {
          const randomIndex = Math.floor(Math.random() * this.base);
          shortUrl += this.characters[randomIndex];
        }
        return shortUrl;
      }
    
      // Check if a short URL already exists in the database
      private async isShortUrlExists(short_url: string): Promise<boolean> {
        const existingUrl = await this.urls.findOne({
          where: { short_url },
        });
        return !!existingUrl;
      }
    
      // Utility function to validate the URL format
      private isValidUrl(url: string): boolean {
        const urlRegex = /^(http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    }
    
    private constructFullShortUrl(shortUrl: string): string {
        return `http://localhost:${process.env.PORT}/api/v1/${shortUrl}`;
    }
    
    async findOriginalUrl(shortUrl: string): Promise<string> {
        const urlEntry = await this.urls.findOne({
          where: { short_url: shortUrl },
        });
    
        if (!urlEntry) {
          throw new NotFoundException('Short URL not found');
        }
    
        return urlEntry.original_url;
      }


}


