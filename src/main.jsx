import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {  persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter 
    future={{v7_startTransition:true,
      v7_relativeSplatPath:true,
    }}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
          <App />
    </PersistGate>
    </Provider>
    </BrowserRouter> 
  </StrictMode>
);
