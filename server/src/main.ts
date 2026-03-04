// import { WebSocketServer } from 'ws'
// import * as rpc from 'vscode-ws-jsonrpc'
// import { launch } from './launch'

// // If you change the port, make sure to also change it for the client!
// // const port = 8080

// // @ts
// const PORT: number = parseInt(<string>process.env.PORT, 10) || 8080


// new WebSocketServer({ port: PORT }).on('connection', (webSocket) => {
//     const socket: rpc.IWebSocket = {
//         send: (content) =>
//             webSocket.send(content, (error) => {
//                 if (error) throw error
//             }),
//         onMessage: (callback) => webSocket.on('message', callback),
//         onError: (callback) => webSocket.on('error', callback),
//         onClose: (callback) => webSocket.on('close', callback),
//         dispose: () => webSocket.close(),
//     }
//     if (webSocket.readyState === webSocket.OPEN) {
//         launch(socket)
//     } else {
//         webSocket.on('open', () => launch(socket))
//     }
// })
import express = require('express')
import expressWs = require('express-ws')
import * as rpc from 'vscode-ws-jsonrpc'
import { launch } from './launch'

const PORT: number = parseInt(process.env.PORT as string, 10) || 8080

const app = express()
const wsInstance = expressWs(app)

wsInstance.app.ws('/', (ws, req) => {
    const socket: rpc.IWebSocket = {
        send: (content) =>
            ws.send(content, (error) => {
                if (error) throw error
            }),
        onMessage: (callback) => ws.on('message', callback),
        onError: (callback) => ws.on('error', callback),
        onClose: (callback) => ws.on('close', callback),
        dispose: () => ws.close(),
    }
    
    if (ws.readyState === ws.OPEN) {
        launch(socket)
    } else {
        ws.on('open', () => launch(socket))
    }
})

app.listen(PORT, () => {
    console.log(`WebSocket server listening on port ${PORT}`)
})