import { socketMiddleware } from '@/middlewares'
import { configureStore } from '@reduxjs/toolkit'
import socketReducers from './sockets'
import authReducers from './auth'

export const store = configureStore({
    reducer: {
        authReducers,
        socketReducers,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat([socketMiddleware])
    },
})
