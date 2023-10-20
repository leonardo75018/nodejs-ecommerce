import { Router } from 'express'
import usersRoutes from './UsersRoutes'

const router = Router()

router.use('/users', usersRoutes)

export default router
