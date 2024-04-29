import { BadRequestsException } from 'exceptions/bad-requests';
import { InternalException } from 'exceptions/internal-exception';
import { ErrorCodes, HttpException } from 'exceptions/root';
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export const errorHandler = (method: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (error: any) {
      let exception: HttpException;
      if (error instanceof HttpException) {
        exception = error;
      } else {
        if (error instanceof ZodError) {
          exception = new BadRequestsException('Unprocessable entity', ErrorCodes.UNPROCESSABLE_ENTITY, error);
        } else {
          exception = new InternalException('Something went wrong!', error, ErrorCodes.INTERNAL_EXCEPTION);
        }
      }
      next(exception);
    }
  };
};
