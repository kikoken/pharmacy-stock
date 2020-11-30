const StockApi = stock => ({
    add: async (req, res, next) => {
        
        try {
            const payload = await stock.add(req.body.data)
        
            res.status(200).json({
                 data: payload
             })
            
        } catch (error) {
            console.log(error)
        }
     },
     getAll: async (req, res, next) => {
        
        try {
            const payload = await stock.get()
        
            res.status(200).json({
                 data: payload
             })
            
        } catch (error) {
            console.log(error)
        }
     },
     deleteByID: async (req, res, next) => {
        
        try {
            const id = req.body.data
            await stock.delete(id)
        
            res.status(200).json({
                 message: 'The item has delete'
             })
            
        } catch (error) {
            console.log(error)
        }
     }
})


export default StockApi(repository.stock)