import dotenv from 'dotenv'

dotenv.config()

export default Object.freeze({
    port: process.env.PORT || 4000,
    refset: process.env.API_REFSET || 1002,
    apiUrl: process.env.API_URL,
    apiKey: process.env.API_KEY
})