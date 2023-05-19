import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';


const middleware = {
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,]
        },
    }),
};

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        news: newsReducer,
        friends: friendsReducer,
        notices: noticesReducer,

    },
    middleware,
});

export const persistor = persistStore(store);
