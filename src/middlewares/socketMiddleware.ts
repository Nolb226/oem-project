import { login } from '@/redux/auth'
import {
    connectionEstablished,
    connectionLost,
    initSocket,
    joinRoom,
} from '@/redux/sockets'
import SocketFactory, { ISocket } from '@utils/sockets'
import { Middleware } from 'redux'

enum SocketEvent {
    Connect = 'connect',
    Disconnect = 'disconnect',
    // Emit events
    JoinRoom = 'join-room',
    LeaveRoom = 'leave-room',
    //On events
}

const socketMiddleware: Middleware = (store) => {
    let socket: ISocket

    return (next) => (action) => {
        if (initSocket.match(action)) {
            if (!socket && typeof window !== 'undefined') {
                socket = SocketFactory.create()

                socket.socket.on(SocketEvent.Connect, () => {
                    store.dispatch(connectionEstablished())
                })

                socket.socket.on(SocketEvent.Disconnect, () => {
                    store.dispatch(connectionLost())
                })
            }
        }
        if (joinRoom.match(action) && socket) {
            let room = action.payload.rooms
            socket.socket.emit(SocketEvent.JoinRoom, room)
        }
        next(action)
    }
}

export default socketMiddleware
