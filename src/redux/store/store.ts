import { configureStore } from "@reduxjs/toolkit"
import {persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";
import darkModeSlice from "../slices/darkModeSlice"

const persistConfig = {
    key: "root",
    storage,
}

export function makeStore() {
    return configureStore({
        reducer: {
            darkMode: persistReducer(persistConfig, darkModeSlice),
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            // Ignore these paths in the state
            ignoredPaths: ['items.dates'],
          },
        }),
    })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch