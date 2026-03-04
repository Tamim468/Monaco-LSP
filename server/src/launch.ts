import * as rpc from 'vscode-ws-jsonrpc'
import * as server from 'vscode-ws-jsonrpc/lib/server'
import { InitializeRequest } from 'vscode-languageserver'
import { resolve } from 'path'
import { platform } from 'os'

function getBinaryPath(): string {

    const winPath    = "./bin/win64/luau-lsp.exe"
    const darwinPath = "./bin/darwin/luau-lsp"
    // const linuxArm   = "./bin/linux-arm64/luau-lsp"
    const linux86    = "./bin/linux-x86_64/luau-lsp"

    const platformStr = platform(); // Get the operating system platform

    switch (platformStr) {
        case 'win32':
            console.log("Hello from Windows! 🏁");
            return winPath;
            // break;
        case 'darwin':
            console.log("Greetings from macOS! 🍏");
            return darwinPath;
            break;
        case 'linux':
            console.log("Welcome to Linux! 🐧");
            return linux86;
            break;
        default:
            console.log(`Running on an unsupported or unknown OS platform: ${platform}`);
            return winPath;
    }
}

const isInitializeRequest = (message: rpc.RequestMessage) =>
    message.method === InitializeRequest.type.method

export const launch = (socket: rpc.IWebSocket) => {
    const reader = new rpc.WebSocketMessageReader(socket)
    const writer = new rpc.WebSocketMessageWriter(socket)

    const socketConnection = server.createConnection(reader, writer, () =>
        socket.dispose()
    )

    let binarypath = getBinaryPath();
    const serverConnection = server.createServerProcess(
        'LuaU',
        resolve(process.cwd(), binarypath), ["lsp", "--docs=./en-us.json", "--definitions=./globalTypes.d.lua", "--base-luaurc=./.luaurc"]
    )
    server.forward(socketConnection, serverConnection, (message) => {
        if (rpc.isRequestMessage(message) && isInitializeRequest(message)) {
            message.params.processId = process.pid
        }
        return message
    })
}
