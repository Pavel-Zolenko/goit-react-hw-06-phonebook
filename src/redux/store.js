import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from "redux/contactsSlice";
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';


import storage from 'redux-persist/lib/storage';


export const { addContact, deleteContact, filterChange } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts', 'filter']
};

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,           
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)

