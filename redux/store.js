import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import User from './reducers/User';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});

//configuration redux-persist
const configuration = { key: 'root', storage: AsyncStorage, version: 1 };
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(logger)
  // },
});

export const persistor = persistStore(store);
persistor.purge();
export default store;
