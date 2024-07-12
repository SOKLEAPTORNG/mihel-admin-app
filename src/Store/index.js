import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {Loading, User} from './Reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['User'],
};

const reducers = combineReducers({
  Loading,
  User,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [ReduxThunk],
});

export const persistedStore = persistStore(store);
