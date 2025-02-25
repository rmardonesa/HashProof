import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  Get,
  Query,
} from '@nestjs/common';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { HashingService } from './hashing.service';

@Controller('hashing')
export class HashingController {
  constructor(private readonly hashingService: HashingService) {}

  @Post('generate')
  @UseInterceptors(FileInterceptor('file'))
  async generateHash(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    if (file.mimetype !== 'application/pdf') {
      throw new BadRequestException('Only PDF files are allowed');
    }
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new BadRequestException('File size exceeds 10MB limit');
    }
    const hash = await this.hashingService.generateSHA256(file.buffer);
    await this.hashingService.storeHash(hash, file.originalname);
    return { fileName: file.originalname, hash };
  }

  @Get('validate')
  async validateHash(@Query('hash') hash: string) {
    if (!hash) {
      return { error: 'Hash is required' };
    }
    const fileName = await this.hashingService.validateSHA256(hash);
    if (fileName) {
      return { exists: true, fileName };
    }
    return { exists: false };
  }
}

