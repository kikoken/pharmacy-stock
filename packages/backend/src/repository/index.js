import client from '../client';

// Repositories
import PharmacyRepository from './pharmacy.repository'
import StockRepository from './stock.repository'

const pharmacy = PharmacyRepository(client)
const stock = StockRepository

const repository = () => Object.freeze({
    pharmacy,
    stock
})

export default repository()