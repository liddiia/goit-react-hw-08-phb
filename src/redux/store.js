import { configureStore } from "@reduxjs/toolkit";
import  contactsReducer  from "./contacts/slice";
import  filtersReducer  from "./filters/slice";
import { authReducer } from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsConfig = {
  key: "contactsKey",
  storage,
};

const authConfig = {
  key: "auth",
  storage,
  whitelist:["token"],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),//авто синхронізація з локлсторидж
    filters: filtersReducer,
    auth: persistReducer(authConfig, authReducer),//авто синхронізація з локлсторидж
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),


});

export const persistor = persistStore(store);