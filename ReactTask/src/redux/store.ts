import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import patientReducer from './patient/patientReducer';
import doctorReducer from './doctor/doctorReducer';
import authReducer from './formFeatures/formFeaturesReducer';
import { AuthReducerType } from '../modules/Redux.model';

const authPersistConfig = {
  key: 'authForm',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    authForm: persistReducer<any & AuthReducerType>(
      authPersistConfig,
      authReducer
    ),
    patientList: patientReducer,
    doctorList: doctorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
