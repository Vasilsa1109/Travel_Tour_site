import { Request, Response, NextFunction, RequestHandler } from 'express';

export const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// функция-обработчик ошибок: asyncHandler - функция-обертка для Express, которая автоматически ловит ошибки из async/await функций и передает их в стандартный middleware ошибок Express (next(err)). 
//контроллеры(из entities) остаются чистыми, не нужно писать try/catch в каждом месте.
// Ошибки автоматически прокидываются в глобальный error handler. 
