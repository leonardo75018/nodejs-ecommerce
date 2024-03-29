import express, { Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import router from './views/index'
import 'express-async-errors'

const app = express()

app.use(express.json(), router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message
      })
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error '
    })
  }
)

app.listen(process.env.PORT, () =>
  console.log(`Serveur run on port ${process.env.PORT}`)
)
