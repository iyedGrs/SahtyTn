import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// const persistor = persistStore(store);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Router>
    </Provider>
  </StrictMode>
);
