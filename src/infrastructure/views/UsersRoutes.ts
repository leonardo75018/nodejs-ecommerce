import { Router } from 'express'
import { UsersControllers } from '../controllers'
const usersControllers = new UsersControllers()

const usersRoutes = Router()

usersRoutes.post('/', usersControllers.createUser)
usersRoutes.get('/', usersControllers.getAllUsers)
usersRoutes.get('/:userId', usersControllers.findUserById)
usersRoutes.patch('/:userId', usersControllers.updateUser)
usersRoutes.delete('/:userId', usersControllers.deleteUserById)

export default usersRoutes
