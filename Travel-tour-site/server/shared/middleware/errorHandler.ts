import { Request, Response, NextFunction } from 'express';

// глобальный обработчик ошибок 
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(' Error:', err);

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
};
