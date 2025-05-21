import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App'
import Cars from './pages/Cars'
import AppLayout from './layouts/AppLayout'
import Provider from './pages/Provider'
import CarInformation from './pages/CarInformation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path="cars" element={<Cars />} />
        <Route path="providers" element={<Provider />} />
        <Route path="details" element={<CarInformation />} />
        <Route index element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
