import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/toaster.jsx';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import axiosInstance from './utils/axios.js';

axiosInstance.interceptors.request.use((config) => {
  const token = store.getState().auth.token; // Assuming you store the token in the state
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter router={router}>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
