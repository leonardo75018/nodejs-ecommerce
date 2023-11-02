import { Router } from 'express'
import { CartProductControllers, CartsControllers } from '../controllers'

const cartControllers = new CartsControllers()
const cartProductControllers = new CartProductControllers()

const CartsRoutes = Router()

CartsRoutes.get('/:userId', cartControllers.getCartByUserId)
CartsRoutes.post('/:userId', cartControllers.createCart)
CartsRoutes.post('/add/:userId', cartProductControllers.createCartProducts)

export default CartsRoutes
