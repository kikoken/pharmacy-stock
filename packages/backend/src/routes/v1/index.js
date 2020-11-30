import { Router } from 'express'

import pharmacyRoute from '../../api/pharmacy'

const router = Router()
router.use('/', pharmacyRoute)

export default router