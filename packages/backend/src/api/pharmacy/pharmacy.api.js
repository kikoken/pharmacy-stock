import repository from '../../repository'


const PharmacyApi = pharmacy => ({
    search: async (req, res, next) => {
        
        try {
            const payload = await pharmacy.searchMedicines(req.body.data)
        
            res.status(200).json({
                 data: payload
             })
            
        } catch (error) {
            console.log(error)
        }
     }
})


export default PharmacyApi(repository.pharmacy)