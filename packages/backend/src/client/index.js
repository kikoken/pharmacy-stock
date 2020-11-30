import axios from './instance'
import config from '../config'


const makeAPIAdapter = client => ({
    get: async (searchTxt) => {
        const headers = { headers: { 'x-api-key': config.apiKey }}

        const data = await client.get('/vtm', {
            params: { q: searchTxt , refset: config.refset},
            headers
        })

        return data

    }
})

export default makeAPIAdapter(axios)