import { Router } from 'express'
import usersRoutes from './UsersRoutes'
import cartsRoutes from './CartsRoutes'
import { OrdersControllers } from '../controllers/OrdersControllers'
import { OrdersRouter } from './OrdersControllers'

const router = Router()

router.use('/users', usersRoutes)
router.use('/carts', cartsRoutes)
router.use('/orders', OrdersRouter)

export default router
