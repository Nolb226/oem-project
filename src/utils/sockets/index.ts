import { Socket, io } from 'socket.io-client'

export interface ISocket {
    socket: Socket
}

class SocketConnection implements ISocket {
    public socket: Socket
    public socketEndPoint: string =
        process.env.REACT_APP_WEBSOCKET_URL || 'localhost:8080'

    constructor() {
        this.socket = io(this.socketEndPoint)
    }
}

let socketConnection: SocketConnection | undefined

class SocketFactory {
    public static create(): SocketConnection {
        if (!socketConnection) {
            socketConnection = new SocketConnection()
        }
        return socketConnection
    }
}

export default SocketFactory
