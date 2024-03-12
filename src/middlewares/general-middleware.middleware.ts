import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class GeneralMiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (!req.query.lang) {
      req.query.lang = 'fr'; // langue par défaut: la langue de molière
    }
    next();
  }
}
