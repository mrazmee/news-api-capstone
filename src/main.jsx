import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';  // Impor store

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  {/* Membungkus aplikasi dengan Provider */}
    <App />
  </Provider>
);
