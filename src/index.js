import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BillProvider } from "./context/BillContext"; // Thêm dòng này

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BillProvider>
        <App />
      </BillProvider>
    </Provider>
  </React.StrictMode>
);
