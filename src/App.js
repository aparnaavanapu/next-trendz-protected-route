import {BrowserRouter, Route, Routes} from 'react-router-dom'

import LoginFormWrapper from './components/LoginFormWrapper'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginFormWrapper/>} />
      <Route exact path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route exact path="/products" element={<ProtectedRoute><Products/></ProtectedRoute>} />
      <Route exact path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

export default App