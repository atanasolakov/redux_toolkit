import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element = {<App />} />
        <App />
      </Routes>
    </BrowserRouter>
  </Provider>
);
