import { Router } from 'express'

// api
import Pharmacy from './pharmacy.api'

const router = Router()
router.get('/medicines/search', Pharmacy.search)


export default router