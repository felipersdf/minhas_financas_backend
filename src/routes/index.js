import routerx from 'express-promise-router'
import usuarioRouter from './usuarioRouter'
import lancamentoRouter from './lancamentosRouter'

const router = routerx()

router.use('/usuarios', usuarioRouter)
router.use('/lancamentos', lancamentoRouter)

export { router }