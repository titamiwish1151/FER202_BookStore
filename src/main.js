// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';
import { BillProvider } from './context/BillContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BillProvider>
        <App />
      </BillProvider>
    </Provider>
  </React.StrictMode>
);
