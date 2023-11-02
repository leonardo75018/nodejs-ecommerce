import { Router } from 'express'
import { OrdersControllers } from '../controllers/OrdersControllers'

export const OrdersRouter = Router()
const ordersControllers = new OrdersControllers()

OrdersRouter.post('/:userId', ordersControllers.createOrder)
OrdersRouter.get('/', ordersControllers.getOrders)
