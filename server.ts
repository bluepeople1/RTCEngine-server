import { config } from 'dotenv'

import SignallingServer from './signalling/server'

const signalling = new SignallingServer()

config()

const port = process.env.PORT ? parseInt(process.env.PORT) : 3888
const host = process.env.HOST ? process.env.HOST : '127.0.0.1'

signalling.start(port, host, () => {
    console.log('signalling server start on', host, port)
})













