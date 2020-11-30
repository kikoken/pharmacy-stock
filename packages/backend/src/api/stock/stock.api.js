import repository from '../../repository'

const StockApi = stock => ({
    add: async (req, res, next) => {
        
        try {
            const {name, amount} = req.body.data
            const payload = await stock.add(name, amount)
        
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
            const { id } = req.params
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