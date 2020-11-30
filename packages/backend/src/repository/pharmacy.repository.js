const PharmacyRepository = client => ({
    searchMedicines: async (search) => {
        const response = await client.get(search)
        return response
    }
})

export default PharmacyRepository