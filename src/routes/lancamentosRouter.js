import routerx from 'express-promise-router'
import lancamentosController from '../controllers/lancamentosController'

const router = routerx()

router.post('/', lancamentosController.add)
router.put('/:id', lancamentosController.update)
router.get('/', lancamentosController.list)
router.get('/:id', lancamentosController.findById)

export default router