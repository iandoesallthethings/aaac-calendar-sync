import * as functions from 'firebase-functions'
import express from 'express'

const server = express()

server.get('/hello-world', (request, response) => {
	response.send('Hello world')
})

export const app = functions.https.onRequest(server)
