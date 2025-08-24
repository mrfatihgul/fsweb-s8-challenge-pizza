import "./Order.css"
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DoughSelector from '../components/order/DoughSelector.jsx';
import NotesInput from '../components/order/NotesInput.jsx';
import PizzaDescription from '../components/order/PizzaDescription.jsx';
import PizzaHeader from '../components/order/PizzaHeader.jsx';
import QuantityandTotal from '../components/order/QuantityandTotal.jsx';
import SizeSelector from '../components/order/SizeSelector.jsx';
import ToppingsSelector from '../components/order/ToppingsSelector.jsx';
import { useNavigate } from "react-router-dom"; 
import axios from "axios";


function Order({
  name, setName,
  pizzaSize,
  adet,
  siparisNotu,
  secimlerTutari, 
  toplamTutar, 
  isValid,
  formuGonder, 
  sayiAzalt, 
  sayiArttir, 
  notGir, 
  malzemeUyarıMesajı, 
  handlePizzaSizeChange, 
  hamur, 
  setHamur,
  toppings,
  seciliMalzemeSayısı,
  setOrderData,
  MIN_TOPPINGS,
  MAX_TOPPINGS  
}) {
  let sonToastId = null;
  const navigate = useNavigate(); // YENİ EKLE

  async function formuGonder(e) { // YENİ EKLE
    e.preventDefault();
    if (seciliMalzemeSayısı < MIN_TOPPINGS) {
      if (!toast.isActive(sonToastId)) {
        sonToastId = toast.error("En az " + MIN_TOPPINGS + " malzeme seçmelisin.");
      }
      return; // işlemi durdur
    }

    if (adet <= 0) {
      toast.error("En az 1 ürün seçmelisiniz!");
      return;
    }

    if (!isValid) {
      toast.error("Lütfen tüm alanları doldurun!"); 
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
      navigate("/success"); // yönlendirme burada olacak
    } catch (hata) {
      console.error("Sipariş gönderilirken hata oluştu: ", hata);
    }
  }
  return (
    <>  
       <form onSubmit={formuGonder}>
        <main>
          
          <section className="bg-[#FAF7F2] flex flex-col items-center justify-start w-full">
            {/* Navbar */}
            <nav className="w-full flex flex-col items-center justify-start gap-6 pt-8 pb-5 bg-[#CE2829] text-xs">
              <Link to="/">
                <img src='images/iteration-1-images/logo.svg' className="block h-8"></img>
              </Link>
            </nav>
          </section>

          <section className="bg-[#FAF7F2] flex flex-col items-center justify-start w-full">
            <PizzaHeader />

            <PizzaDescription />
          </section>

          {/* Pizza Boyutu Seçme */}
          <div className='w-full flex justify-center pb-8'>
            <div className='screenwidth w-1/4 flex'>
              <SizeSelector handlePizzaSizeChange={handlePizzaSizeChange} />
              <DoughSelector hamur={hamur} setHamur={setHamur}/>
            </div>
          </div>  

          {/* Ek Malzeme Ekleme */}
          <ToppingsSelector malzemeUyarıMesajı={malzemeUyarıMesajı} toppings={toppings}/>

          {/* Sipariş Notu, Adet Ekleme ve Sipariş Ver Butonu*/}
          <section className="flex flex-col items-center justify-start w-full">
            {/* Başlık: Sipariş Notu */}
            <div className="screenwidth w-1/4 flex justify-start font-semibold pb-5">
              <h2>Sipariş Notu</h2>
            </div>

            <div className='screenwidth w-1/4 flex justify-start font-semibold pb-4'>
              <input
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                minLength={3}
                placeholder="İsminiz"
                className="placeholder:text-xs bg-[#F8F5EF] text-[#292929] text-xs py-3 px-4 font-light rounded-lg appearance-none focus:outline-none"
              />
            </div>

            {/* Sipariş Notu Input Alanı */}
            <NotesInput siparisNotu={siparisNotu} notGir={notGir} />

            {/* Yatay Ayırıcı Çizgi */}
            <div className="flex justify-start screenwidth w-1/4 h-px bg-gray-300 mb-6"></div>

            {/* Adet Seçim Alanı ve Yanındaki Boşluk */}
            <QuantityandTotal 
              sayiAzalt={sayiAzalt}
              sayiArttir={sayiArttir}
              adet={adet}
              secimlerTutari={secimlerTutari}
              toplamTutar={toplamTutar}
              isValid={isValid}
            />
          </section>

          <section>
            <Footer />
          </section>
        </main>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default Order