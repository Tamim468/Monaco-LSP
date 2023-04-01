import { listen } from '@codingame/monaco-jsonrpc'
import {
  CloseAction,
  createConnection,
  ErrorAction,
  MessageConnection,
  MonacoLanguageClient,
} from '@codingame/monaco-languageclient'
import ReconnectingWebSocket from 'reconnecting-websocket'

const createLanguageClient = (connection: MessageConnection) =>
  new MonacoLanguageClient({
    name: 'Lua Language Client',
    clientOptions: {
      documentSelector: ['lua'],
      // Disable the default error handler.
      errorHandler: {
        error: () => ErrorAction.Continue,
        closed: () => CloseAction.DoNotRestart,
      },
    },
    connectionProvider: {
      get: (errorHandler, closeHandler) =>
        Promise.resolve(
          createConnection(connection, errorHandler, closeHandler)
        ),
    },
  })

export const connectLanguageServer = (url: string) =>
  listen({
    webSocket: new ReconnectingWebSocket(url) as WebSocket,
    onConnection: (connection) => {
      const languageClient = createLanguageClient(connection)
      const disposable = languageClient.start()
      connection.onClose(() => disposable.dispose())
    },
  })
