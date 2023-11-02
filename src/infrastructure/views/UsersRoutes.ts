import { Router } from 'express'
import { UsersControllers } from '../controllers'
import { ensureAdmin, ensureAuthentificated } from '../middlewares/index'

const usersControllers = new UsersControllers()

const usersRoutes = Router()

usersRoutes.get('/', usersControllers.getAllUsers)
usersRoutes.get('/:userId', usersControllers.findUserById)
usersRoutes.patch('/:userId', usersControllers.updateUser)
usersRoutes.delete('/:userId', usersControllers.deleteUserById)
usersRoutes.post('/', usersControllers.createUser)
usersRoutes.post('/login', usersControllers.authentification)

export default usersRoutes
