import './App.css'
import Order from "./pages/Order.jsx";
import Home from './pages/Home.jsx';
import Success from './pages/Success.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { pizza } from "./data";


function App() {
  const BASE_PRICE = pizza.basePrice;
  const TOPPING_PRICE = pizza.toppingsPrice;

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

  let sonToastId = null;

  // State’ler
  const [name, setName] = useState("");
  const [pizzaSize, setPizzaSize] = useState("");
  const [adet, setAdet] = useState(1);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [seciliMalzemeSayısı, seciliMalzemeSayısınıAyarla] = useState(0);
  const [toppings, setToppings] = useState(new Set());
  const [hamur, setHamur] = useState("");


  // Hesaplamalar
  const MIN_TOPPINGS = 4;
  const MAX_TOPPINGS = 10;
  const secimlerTutari = toppings.size * TOPPING_PRICE;
  const sizeExtra = pizza.sizeOptions[pizzaSize] || 0;
  const doughExtra = pizza.doughOptions[hamur] || 0;
  const toplamTutar = (BASE_PRICE + secimlerTutari + sizeExtra + doughExtra) * adet;
  

  const isValid =
    name.trim().length >= 3 &&
    !!pizzaSize &&
    seciliMalzemeSayısı >= MIN_TOPPINGS &&
    seciliMalzemeSayısı <= MAX_TOPPINGS;

  // Fonksiyonlar
  async function formuGonder(e) {
    e.preventDefault();
    if (!isValid) {
      console.log("GEÇERSİZ FORM");
      return;
    }
    try {
      const formVerisi = new FormData(e.currentTarget);
      const selectedToppings = formVerisi.getAll("toppings");
      const payload = {
        name: name.trim(),
        size: pizzaSize,
        toppings: selectedToppings,
        notes: siparisNotu.trim(),
        hamur: formVerisi.get("hamur"),
        adet: adet,
        secimlerTutari: secimlerTutari.toFixed(2),
        toplamTutar: toplamTutar.toFixed(2),
      };

      const cevap = await axios.post("https://jsonplaceholder.typicode.com/posts", payload);
      setOrderData(cevap.data);
      navigate("/success");
    } catch (hata) {
      console.error("Sipariş gönderilirken hata oluştu: ", hata);
      if (!toast.isActive(sonToastId)) {
        sonToastId = toast.error("Sipariş gönderilemedi!");
      }
    }
  }

  function sayiAzalt() {
    if (adet >= 1) setAdet(adet - 1);
  }

  function sayiArttir() {
    setAdet(adet + 1);
  }

  function notGir(e) {
    setSiparisNotu(e.target.value);
  }

  function malzemeUyarıMesajı(e) {
    const seciliyorMu = e.target.checked;
    const malzeme = e.target.value;

    setToppings(prev => {
      const yeni = new Set(prev);
      if (seciliyorMu) yeni.add(malzeme);
      else yeni.delete(malzeme);
      return yeni;
    });

    seciliMalzemeSayısınıAyarla(sayi => {
      if (seciliyorMu) {
        if (sayi >= MAX_TOPPINGS) {
          e.preventDefault();
          if (!toast.isActive(sonToastId)) {
            sonToastId = toast.error("En fazla " + MAX_TOPPINGS + " malzeme seçebilirsin.");
          }
          return sayi;
        }
        return sayi + 1;
      } else {
        if (sayi <= MIN_TOPPINGS) {
          e.preventDefault();
          if (!toast.isActive(sonToastId)) {
            sonToastId = toast.error("En az " + MIN_TOPPINGS + " malzeme seçmelisin.");
          }
          return sayi;
        }
        return sayi - 1;
      }
    });
  }

  function handlePizzaSizeChange(e) {
  setPizzaSize(e.target.value);
}


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={
            <Order
              name={name} setName={setName}
              pizzaSize={pizzaSize} setPizzaSize={setPizzaSize}
              adet={adet} setAdet={setAdet}
              siparisNotu={siparisNotu} setSiparisNotu={setSiparisNotu}
              toppings={toppings} setToppings={setToppings}
              seciliMalzemeSayısı={seciliMalzemeSayısı}
              seciliMalzemeSayısınıAyarla={seciliMalzemeSayısınıAyarla}
              secimlerTutari={secimlerTutari}
              toplamTutar={toplamTutar}
              isValid={isValid}
              formuGonder={formuGonder}
              sayiAzalt={sayiAzalt}
              sayiArttir={sayiArttir}
              notGir={notGir}
              malzemeUyarıMesajı={malzemeUyarıMesajı}
              setOrderData={setOrderData}
              handlePizzaSizeChange={handlePizzaSizeChange}
              hamur={hamur}
              setHamur={setHamur}
            />
          }
        />
        <Route path="/success" element={<Success orderData={orderData} />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}


export default App
