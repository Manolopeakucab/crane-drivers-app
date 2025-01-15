import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>,
)
