import { Router } from 'express'

// api
import Stock from './stock.api'

const router = Router()
router.get('/stock', Stock.getAll)
router.post('/stock', Stock.add)
router.delete('/stock/:id', Stock.delete)


export default router