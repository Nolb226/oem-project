import { socketMiddleware } from '@/middlewares'
import { configureStore } from '@reduxjs/toolkit'
import socketReducers from './sockets'

export const store = configureStore({
    reducer: {
        socketReducers,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat([socketMiddleware])
    },
})
