import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice);

const Store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(Store);

export { Store, persistor };
