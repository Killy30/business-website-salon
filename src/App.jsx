import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import MyCartPage from './pages/MyCartPage.jsx'
import Header from './layouts/Header.jsx'
import ProductPage from './pages/ProductPage.jsx'
import LoadingPage from './layouts/LoadingPage.jsx'

import { ApiRequestProvider } from './context/ApiContext.jsx'
import { MyCartProvider } from './context/MyCartContext.jsx'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import Footer from './layouts/Footer.jsx'

function App() {

  return (
    <>
      <ApiRequestProvider>
        <MyCartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Header />} >
                <Route path='/' element={<MainPage />} />
                <Route element={<LoadingPage />}>
                  <Route path='/tienda' element={<ShopPage />} />
                  <Route path='/producto/:id' element={<ProductPage />} />
                  <Route path='/mi-carrito' element={<MyCartPage />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </MyCartProvider>
      </ApiRequestProvider>
    </>
  )
}

export default App
