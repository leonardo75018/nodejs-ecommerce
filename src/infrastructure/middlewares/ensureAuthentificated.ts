import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthentificated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const AuthToken = request.headers.authorization
  if (!AuthToken) {
    return response.status(401).send()
  }

  const [, token] = AuthToken.split(' ')
  try {
    const { sub } = verify(token, process.env.TOKEN_SECRET_KEY) as IPayload

    request.userId = sub
  } catch (error) {
    return response.status(401).send()
  }
  next()
}
