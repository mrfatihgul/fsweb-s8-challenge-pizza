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

function Order({
  name, setName,
  adet,
  siparisNotu,secimlerTutari, toplamTutar, isValid,
  formuGonder, sayiAzalt, sayiArttir, notGir, malzemeUyarıMesajı, handlePizzaSizeChange, hamur, setHamur
}) {
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
              <div className='screenwidth w-1/2 flex flex-col justify-start gap-6'>
                <DoughSelector hamur={hamur} setHamur={setHamur}/>
              </div>
            </div>  
          </div>

          {/* Ek Malzeme Ekleme */}
          <ToppingsSelector malzemeUyarıMesajı={malzemeUyarıMesajı}/>

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