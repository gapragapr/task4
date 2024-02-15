import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';

import currentUserData from './slices/currentUserData';
import usersList from './slices/usersList';

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    currentUserData: currentUserData,
    usersList: usersList
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware);
    }
});

export default store;
