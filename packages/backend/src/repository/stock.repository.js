import Stock from '../models/stock'

const StockRepository = client => ({
    add: async (name, amount) => {
        const newItem = new Stock({name, amount})
        return await newItem.save()
    },
    get: async () => {
        const response = await client.find()
        return response
    },
    delete: async (id) => {
       return await client.findByIdAndRemove(id)
    },
})

export default StockRepository(Stock)