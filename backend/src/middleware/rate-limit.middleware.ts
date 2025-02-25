// eslint-disable-next-line prettier/prettier
import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  private requests = new Map<string, { count: number; lastRequest: number }>();
  private limit = 10;
  private windowMs = 60 * 1000;

  use(req: Request, res: Response, next: NextFunction) {
    const ipRaw = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const ip = Array.isArray(ipRaw) ? ipRaw[0] : ipRaw || 'unknown';

    if (!this.requests.has(ip)) {
      this.requests.set(ip, { count: 1, lastRequest: Date.now() });
    } else {
      const data = this.requests.get(ip)!;
      if (Date.now() - data.lastRequest < this.windowMs) {
        data.count++;
        if (data.count > this.limit) {
          // eslint-disable-next-line prettier/prettier
          throw new HttpException('Too many requests, please slow down.', HttpStatus.TOO_MANY_REQUESTS);
        }
      } else {
        data.count = 1;
        data.lastRequest = Date.now();
      }
    }

    next();
  }
}
