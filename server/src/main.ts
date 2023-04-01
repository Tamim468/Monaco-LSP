import { WebSocketServer } from 'ws'
import * as rpc from 'vscode-ws-jsonrpc'
import { launch } from './launch'

// If you change the port, make sure to also change it for the client!
const port = 8080

new WebSocketServer({ port }).on('connection', (webSocket) => {
    const socket: rpc.IWebSocket = {
        send: (content) =>
            webSocket.send(content, (error) => {
                if (error) throw error
            }),
        onMessage: (callback) => webSocket.on('message', callback),
        onError: (callback) => webSocket.on('error', callback),
        onClose: (callback) => webSocket.on('close', callback),
        dispose: () => webSocket.close(),
    }
    if (webSocket.readyState === webSocket.OPEN) {
        launch(socket)
    } else {
        webSocket.on('open', () => launch(socket))
    }
})
