import routerx from 'express-promise-router'
import usuarioController from '../controllers/usuarioController'
import auth from '../middlewares/auth'
import { getUser } from '../middlewares/ldap'

const router = routerx()

router.post('/', usuarioController.create)
router.put('/:id', usuarioController.update)
router.get('/', usuarioController.index)
router.get('/:id', usuarioController.findById)
router.post('/login', getUser, usuarioController.login)

export default router