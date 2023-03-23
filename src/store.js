import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};
const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);
const enhancers = [middlewareEnhancer];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  preloadedState: initialState,
  devTools: composeWithDevTools(...enhancers)
});

export const persistor = persistStore(store);