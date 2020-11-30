const StockRepository = client => ({
    add: async (search) => {
        const response = await client.get(search)
        return response
    },
    get: async (search) => {
        const response = await client.get(search)
        return response
    },
    delete: async (search) => {
        const response = await client.get(search)
        return response
    },
})

export default StockRepository