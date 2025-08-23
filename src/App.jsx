import './App.css'
import Order from "./pages/Order.jsx";
import Home from './pages/Home.jsx';
import Success from './pages/Success.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [orderData, setOrderData] = useState({
    name: "",
    size: "",
    toppings: [],
    notes: "",
    hamur: "",
    adet: 0,
    secimlerTutari: 0,
    toplamTutar: 0
  });

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order setOrderData={setOrderData} />} />
        <Route path='/success' element={<Success orderData={orderData} />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
