import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { json } from 'body-parser'

import routes from '../routes'

const start = async (options) => {
    const app = express()
    app.use(helmet())
    app.use(cors())
    app.use(json())
    app.use((err, req, res, next) => {
        res.status(500).send('Something went wrong!')   
        throw new Error('Something went wrong!', `err: ${err}`)
    })


    //Routes
    app.use('/api/v1', routes)

    const server = app.listen(options.port, async () => server)

    return await server
}

export default Object.assign({}, {start})