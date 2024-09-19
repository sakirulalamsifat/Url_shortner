import { Test, TestingModule } from '@nestjs/testing';
import { urlController } from './url.controller';
import { UrlService } from './url.service';
import { Response } from 'express';
import { NotFoundException } from '@nestjs/common';

// Mock UrlService
jest.mock('./url.service', () => ({
  UrlService: {
    findOriginalUrl: jest.fn(),
  },
}));

describe('urlController', () => {
  let controller: urlController;
  let service: UrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [urlController],
      providers: [
        {
          provide: UrlService,
          useValue: {
            findOriginalUrl: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<urlController>(urlController);
    service = module.get<UrlService>(UrlService);
  });

  it('should redirect to the original URL if short URL exists', async () => {
    const res = {
      redirect: jest.fn(),
    } as unknown as Response;
    const shortUrl = 'abc123';
    const originalUrl = 'https://example.com';

    // Mock the service method
    (service.findOriginalUrl as jest.Mock).mockResolvedValue(originalUrl);

    await controller.redirectToOriginalUrl(shortUrl, res);
    expect(res.redirect).toHaveBeenCalledWith(originalUrl);
  });

  it('should throw NotFoundException if short URL is not found', async () => {
    const res = {
      redirect: jest.fn(),
    } as unknown as Response;
    const shortUrl = 'abc123';

    // Mock the service method to throw NotFoundException
    (service.findOriginalUrl as jest.Mock).mockRejectedValue(new NotFoundException());

    await expect(controller.redirectToOriginalUrl(shortUrl, res)).rejects.toThrow(NotFoundException);
  });
});
