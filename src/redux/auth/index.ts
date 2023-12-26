import { createSlice } from '@reduxjs/toolkit'
import { initSocket } from '../sockets'

type IAuth = {
    name: string
    token: string
}

const initialState: IAuth = {
    name: '',
    token: '',
}

const authSlice = createSlice({
    name: '@@auth',
    initialState,
    reducers: {
        login: (state) => {
            return
        },
    },
})

export const { login } = authSlice.actions

export default authSlice.reducer
