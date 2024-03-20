import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Form from './components/Form';
import AnswerKey from './components/AnswerKey';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/answer-key" element={<AnswerKey />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
