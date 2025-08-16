import { useState } from 'react'
import "./Order.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Order({ setOrderData }) {

  let sonToastId = null;
  
  {/*State Tanımları*/}
  const [name, setName] = useState("");
  const [pizzaSize, setPizzaSize] = useState("");
  const [adet, setAdet] = useState(0);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [seciliMalzemeSayısı, seciliMalzemeSayısınıAyarla] = useState(0);
  const [toppings, setToppings] = useState(new Set());

  {/*Hooklar*/}
  const navigate = useNavigate();

  {/*Sabitler*/}
  const MIN_TOPPINGS = 4;
  const MAX_TOPPINGS = 10;

  const toppingsCount = toppings.size;
  const isValid =
    name.trim().length >= 3 &&
    !!pizzaSize &&
    seciliMalzemeSayısı >= MIN_TOPPINGS &&
    seciliMalzemeSayısı <= MAX_TOPPINGS;

  async function formuGonder(e) {
    e.preventDefault();
    if (!isValid) {
      console.log("GEÇERSİZ FORM");
      return;
    }

    try {
      console.log("1) POST ÖNCESİ");
      const formVerisi = new FormData(e.currentTarget);
      const selectedToppings = formVerisi.getAll("toppings");
      const payload = {
        name: name.trim(),
        size: pizzaSize,
        toppings: selectedToppings,
        notes: siparisNotu.trim(),
        hamur: formVerisi.get("hamur"),
        adet: adet,
      };

      setOrderData(payload);
      const cevap = await axios.post("https://jsonplaceholder.typicode.com/posts", payload);
      console.log("2) POST SONRASI, CEVAP:", cevap.status, cevap.data);

      navigate("/success");
      console.log("3) NAVIGATE ÇAĞRILDI");
    } catch (hata) {
        console.error("Sipariş gönderilirken hata oluştu: ", hata);

        if(!toast.isActive(sonToastId)){
          sonToastId = toast.error("Sipariş gönderilemedi! Lütfen internet bağlantınızı kontrol edin.");
  }
}
  }

  function sayiAzalt() {
    if (adet>=1) {
      setAdet(adet - 1);
    }
  }

  function sayiArttir() {
    if (true) {
      setAdet(adet + 1);
    }
  }

  function handlePizzaSizeChange(e) {
  setPizzaSize(e.target.value);
  }

  function notGir(girdiGeldi) {
    setSiparisNotu(girdiGeldi.target.value);
  }

  function malzemeUyarıMesajı(tiklamaBilgisi) {
    const seciliyorMu = tiklamaBilgisi.target.checked;

    seciliMalzemeSayısınıAyarla(function(x) {
      if (seciliyorMu) {
        if (x >= MAX_TOPPINGS) {
          tiklamaBilgisi.preventDefault();
          if(!toast.isActive(sonToastId)){
            sonToastId = toast.error("En fazla " + MAX_TOPPINGS + " malzeme seçebilirsin.");
          } 
          return x;
        }
        return x + 1;
      } else {
        if (x <= MIN_TOPPINGS) {
          tiklamaBilgisi.preventDefault();
          if(!toast.isActive(sonToastId)){
            sonToastId = toast.error("En az " + MIN_TOPPINGS + " malzeme seçmelisin.");
          }
            return x;
        }
        return x-1;
      }
    });
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

            <nav className="w-full flex flex-col items-center justify-start gap-6 pb-5 bg-[#FAF7F2] text-xs">
              <div className='w-1/4'>
                <img src='images/iteration-2-images/pictures/form-banner.png'></img>
              </div>
              <div className='flex gap-1 screenwidth w-1/4 mt-4'>
                <Link to="/">
                  <span className='text-black brightness-180 contrast-200 hover:text-[#CE2829]'>Anasayfa</span>
                </Link>
                  <span className="text-black brightness-180 contrast-200 ">-</span>
                <Link to="/order">
                  <span href='#create' className='text-black brightness-180 contrast-200 hover:text-[#CE2829]'>Sipariş Oluştur</span>
                </Link>
              </div>
            </nav>
            {/* Yazılar*/}
            <div className="screenwidth w-1/4 pt-5 pb-7 font-semibold text-[#292929]">    
              <h2>Position Absolute Acı Pizza</h2>
            </div>
            <div className='screenwidth w-1/4 flex flex-row items-center justify-start'>
              <h1 className='font-bold text-xl text-[#292929]'>85.50₺</h1>
              <p className='font-extralight text-xs ml-[60%]'>4.9</p>
              <div className='ml-auto'>
                <p className='font-extralight text-xs'>(200)</p>
              </div>
            </div>
            <div className='screenwidth w-1/4 flex flex-row justify-start pt-5 pb-8 text-[#5F5F5F] font-normal'>
              <p className='font-normal leading-loose text-sm'>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.</p>
            </div>
          </section>

          {/* Pizza Boyutu Seçme */}
          <section className='w-full flex justify-center pb-8'>
            <div className='screenwidth w-1/4 flex'>
              <div className='screenwidth w-1/2 flex flex-col justify-start gap-6'>
                <div className='flex flex-col text-xs justify-start gap-4 mt-10'>
                  <h2 className='font-semibold text-lg'>Boyut Seç *</h2>
                  <div className="flex items-center gap-4 max-sm:gap-1">
                  {/* S */}
                  <div>
                    <input id="size-s" name="pizza-size" type="radio" value="S" className="peer sr-only" onChange={handlePizzaSizeChange}/>
                    <label htmlFor="size-s" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F8F5EF] text-[#292929] transition peer-checked:bg-black peer-checked:text-white">S</label>
                  </div>

                  {/* M */}
                  <div>
                    <input id="size-m" name="pizza-size" type="radio" value="M" className="peer sr-only" onChange={handlePizzaSizeChange}/>
                    <label htmlFor="size-m" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F8F5EF] text-[#292929] transition peer-checked:bg-black peer-checked:text-white">M</label>
                  </div>

                  {/* L */}
                  <div>
                    <input id="size-l" name="pizza-size" type="radio" value="L" className="peer sr-only" onChange={handlePizzaSizeChange}/>
                    <label htmlFor="size-l" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F8F5EF] text-[#292929] transition peer-checked:bg-black peer-checked:text-white">L</label>
                  </div>
                </div>
                </div>
              </div>
              <div className='screenwidth w-1/2 flex flex-col justify-start gap-6'>
                <div className="mb-6 mt-10">
                  <label className="block text-lg font-semibold text-[#292929] mb-5">
                    Hamur Seç 
                    <span className="ml-2 text-[#CE2829]">*</span>
                  </label>
                  
                  <select className="w-full bg-[#F8F5EF] text-[#292929] text-xs py-3 px-4 rounded-lg appearance-none focus:outline-none" defaultValue="" required name="hamur">
                    <option value="" disabled hidden>- Hamur Kalınlığı Seç -</option>
                    <option value="Süpper İnce">Süpper İnce</option>
                    <option value="Süpper Normal">Süpper Normal</option>
                    <option value="Süpper Kalın">Süpper Kalın</option>
                  </select>
                </div>

              </div>
            </div>  
          </section>

          {/* Ek Malzeme Ekleme */}
          <section className='w-full flex flex-col items-center gap-4 pb-30'>
            <div className='screenwidth w-1/4 flex justify-start font-semibold'>
              <h2>Ek Malzemeler</h2>
            </div>
            <div className="screenwidth w-1/4 flex justify-start">
              <p className='text-[#5F5F5F] font-normal text-sm'>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            </div>
            
            <div className='screenwidth w-1/4 flex justify-start malzemeler-kapsayici'>
              <div className='screenwidth w-1/3 flex flex-col justify-start gap-8 malzeme-sutun'>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Pepperoni" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Pepperoni</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Sosis" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Sosis</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Kanada Jambonu" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Kanada Jambonu</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Tavuk Izgara" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Tavuk Izgara</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Soğan" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Soğan</label>
                </div>
              </div>
              <div className='screenwidth w-1/3 flex flex-col justify-start gap-8 malzeme-sutun'>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Domates" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Domates</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Mısır" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Mısır</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Sucuk" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Sucuk</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Jalepeno" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Jalepeno</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Sarımsak" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Sarımsak</label>
                </div>
              </div>
              <div className='screenwidth w-1/3 flex flex-col justify-start gap-8 malzeme-sutun'>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Biber" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Biber</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Sucuk" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Sucuk</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Ananas" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Ananas</label>
                </div>
                <div className='flex items-center'>
                  <input type="checkbox" name="toppings" value="Kabak" className="appearance-none checkbox h-6 w-6 bg-gray-100 checked:bg-[#FDC913] rounded" onChange={malzemeUyarıMesajı}/>
                  <label className="text-xs font-medium ml-1">Kabak</label>
                </div>
              </div>
            </div>
          </section>

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
            <div className='screenwidth w-1/4 flex justify-start font-semibold pb-6'>
              <input 
                type="text" 
                value={siparisNotu} 
                onChange={notGir} 
                placeholder="Siparişine eklemek istediğin bir not var mı?" 
                className="placeholder:text-xs placeholder:text-[#5F5F5F] bg-[#F8F5EF] text-[#292929] text-xs font-light py-3 px-4 rounded-lg appearance-none focus:outline-none w-full"
              />
            </div>

            {/* Yatay Ayırıcı Çizgi */}
            <div className="flex justify-start screenwidth w-1/4 h-px bg-gray-300 mb-6"></div>

            {/* Adet Seçim Alanı ve Yanındaki Boşluk */}
            <div className='flex flex-row screenwidth w-1/4 justify-start pb-10'>
              
              {/* Adet Butonları (Sol Kısım - 1/3) */}
              <div className='flex flex-col w-1/3'>
                <div className='flex flex-row items-center'>
                  <button onClick={sayiAzalt} type='button' className="px-4 py-3 bg-[#F8F5EF] rounded text-xs">-</button>
                  <span className="w-8 text-center text-xs bg-[#F8F5EF] py-3 px-3">{adet}</span>
                  <button onClick={sayiArttir} type='button' className="px-4 py-3 bg-[#F8F5EF] rounded text-xs">+</button>
                </div>
              </div>

              {/* Sipariş Ver Butonu (Sağ Kısım - 2/3) */}
              <div className='flex flex-col w-2/3 pl-[1.5rem]'>
                <div className="py-1 bg-[#F8F5EF] text-[#292929] text-xs font-light py-3 px-4 rounded-lg appearance-none focus:outline-nonew-full">
                  <div className='p-6 flex flex-col gap-3'>
                    <span className='text-xs font-semibold'>Sipariş Toplamı</span>
                    <div className='flex flex-row justify-between'>
                      <span className='text-xs text-[#5F5F5F]'>Seçimler</span>
                      <span className='text-xs text-[#5F5F5F]'>25.00</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                      <span className='text-xs text-[#CE2829]'>Toplam</span>
                      <span className='text-xs text-[#CE2829]'>75.00</span>
                    </div>
                  </div>
                </div>
                <div className='py-2 border bg-[#FDC913]  hover:bg-[#FDC913] border-[#FDC913] rounded w-full'>
                  <button type="submit" disabled={!isValid} className='flex flex-row justify-center text-xs w-full'>
                    SİPARİŞ VER
                  </button>
                </div>

              </div>

            </div>
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