import { Request, Response, NextFunction } from 'express'

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const isAdmin = true

  if (isAdmin) {
    return next()
  }

  return response.status(400).json({
    error: 'Unauthorized'
  })
}
