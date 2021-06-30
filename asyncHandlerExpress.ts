import { Handler, NextFunction, Request, Response } from 'express';

export const asyncHandlerExpress =
  (handlerFn: Handler) =>
  (req: Request, res: Response, next: NextFunction): Promise<void> =>
    Promise.resolve(handlerFn(req, res, next)).catch(e => next(e));
