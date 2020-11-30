import { Router } from 'express'

import pharmacyRoute from '../../api/pharmacy'
import stockRoute from '../../api/stock'

const router = Router()
router.use('/', pharmacyRoute)
router.use('/', stockRoute)

export default router