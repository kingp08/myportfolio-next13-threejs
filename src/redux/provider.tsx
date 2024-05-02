"use client";
import { Provider } from "react-redux"
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import { store } from "./store/store";

const persistor = persistStore(store);

export function DefaultProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        {children}
      </PersistGate>
    </Provider>
  )
}