import './App.css'
import Order from "./pages/Order.jsx";
import Home from './pages/Home.jsx';
import Success from './pages/Success.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  const [orderData, setOrderData] = useState({
    name: "",
    size: "",
    toppings: [],
    notes: "",
    hamur: "",
    adet: 0,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order setOrderData={setOrderData} />} />
        <Route path='/success' element={<Success orderData={orderData} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
