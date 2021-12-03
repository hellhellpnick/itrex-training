import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import patientReducer from './patient/patientReducer';
import authReducer from './formFeatures/formFeaturesReducer';

const authPersistConfig = {
  key: 'authForm',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    authForm: persistReducer(authPersistConfig, authReducer),
    doctorsList: patientReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
