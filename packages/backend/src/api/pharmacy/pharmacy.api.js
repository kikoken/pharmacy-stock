import repository from '../../repository'


const PharmacyApi = pharmacy => ({
    search: async (req, res, next) => {
        const payload = await pharmacy.searchMedicines(req.body.data)
    
        res.status(200).json({
             data: payload
         })
     }
})


export default PharmacyApi(repository.pharmacy)