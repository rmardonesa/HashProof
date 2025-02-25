import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class HashingService {
  private hashStorage: Map<string, string> = new Map();

  async generateSHA256(fileBuffer: Buffer): Promise<string> {
    return crypto.createHash('sha256').update(fileBuffer).digest('hex');
  }

  async saveFile(file: Express.Multer.File): Promise<string> {
    const uploadPath = path.join(__dirname, '../../uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    const filePath = path.join(uploadPath, file.originalname);
    fs.writeFileSync(filePath, file.buffer);
    return filePath;
  }

  async storeHash(hash: string, fileName: string): Promise<void> {
    this.hashStorage.set(hash, fileName);
  }

  async validateSHA256(hash: string): Promise<string | null> {
    return this.hashStorage.get(hash) || null;
  }
}


