import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type SocketState = {
    isConnected: boolean
    rooms: string[]
}

const initialState: SocketState = {
    isConnected: false,
    rooms: [],
}

type RoomAction = PayloadAction<{ rooms: string }>

const socketSlice = createSlice({
    name: '@@socket',
    initialState,
    reducers: {
        initSocket: () => {
            return
        },
        connectionEstablished: (state) => {
            state.isConnected = true
        },
        connectionLost: (state) => {
            state.isConnected = false
        },
        joinRoom: (state, action: RoomAction) => {
            let rooms = action.payload.rooms
            state.rooms = state.rooms.concat(rooms)
            return
        },
    },
})

export const { connectionEstablished, connectionLost, initSocket, joinRoom } =
    socketSlice.actions

export default socketSlice.reducer
