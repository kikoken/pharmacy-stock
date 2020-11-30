import client from '../client';

// Repositories
import PharmacyRepository from './pharmacy.repository'

const pharmacy = PharmacyRepository(client)

const repository = () => Object.freeze({
    pharmacy
})

export default repository