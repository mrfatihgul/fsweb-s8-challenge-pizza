import "./Home.css"
import CategoryChips from "../components/home/CategoryChips.jsx";
import CategoryPills from "../components/home/CategoryPills.jsx";
import { Link } from "react-router-dom";
import PromoCard from "../components/home/PromoCard.jsx";
import Footer from "../components/common/Footer.jsx";

function Home() {
  return (
    <>
      <main className="banner flex flex-col justify-start items-center w-full">
        <Link className="pt-20 pb-5 w-1/4 max-sm:w-3/5 max-w-[15rem]">
          <img src="/images/iteration-1-images/logo.svg"></img>
        </Link>
        <div className="text-[#FDC913] text-xl max-sm:w-3/5 firsat w-1/3 mx-auto text-center">
          fırsatı kaçırma
        </div>
        <div className="slogan text-white max-sm:w-3/5 w-1/3 mx-auto text-center">
            KOD ACIKTIRIR PİZZA, DOYURUR
        </div>
        <Link to="/order">
            <span className="buton font-semibold rounded-full block mt-1 bg-[#FDC913] py-2.5 px-12 hover:bg-[#e5b90f]">
                ACIKTIM
            </span>
        </Link>
      </main>

      <section className="bg-white flex justify-center p-6">
        <CategoryChips />
      </section>

      <section className="bg-[#FAF7F2] w-full">
        <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col gap-4 pt-30 pb-30 w-2/3 mx-auto ">
          <div className="max-sm:aspect-square bg-no-repeat max-sm:bg-right max-sm:bg-white/15 bg-blend-overlay bg-[url('images/iteration-2-images/cta/kart-1.png')] row-span-2 h-full rounded-lg flex flex-col">
            <div className="max-sm:!text-[50px] max-sm:font-semibold lezzetus pl-10 pr-50 pt-10 pr-30 flex text-xxxxxl text-white text-left leading-none">
              Özel Lezzetus
            </div>
            <div className="max-sm:!text-lg max-sm:pr-5 pl-10 pt-2 flex text-xl text-white text-left">
              Position: Absolute Acı Burger
            </div>
            <div className="pl-10 pt-5 flex text-xl text-white">
              <button className="pt-3 pb-3 pr-4 pl-4 rounded-full bg-white text-[#CE2829] text-xs font-semibold">
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="max-sm:aspect-square bg-no-repeat max-sm:bg-right max-sm:bg-white/15 bg-blend-overlay bg-[url('images/iteration-2-images/cta/kart-2.png')] h-60 rounded-lg flex flex-col">
            <div className="max-sm:!text-lg pl-10 pt-10 flex text-[25px] w-50 text-white text-left font-semibold">
              Hackathlon Burger Menü
            </div>
            <div className="pl-10 pt-5 flex text-xl text-white">
              <button className="pt-3 pb-3 pr-4 pl-4 rounded-full bg-white text-[#CE2829] text-xs font-semibold">
                SİPARİŞ VER
              </button>
            </div>
          </div> 
          <div className="max-sm:aspect-square bg-no-repeat max-sm:bg-right max-sm:bg-white/15 bg-blend-overlay bg-[url('images/iteration-2-images/cta/kart-3.png')] h-60 rounded-lg flex flex-col">
            <div className="pl-10 pt-10 flex text-[25px] text-black text-left font-normal">
              <div className="w-50 font-bold max-sm:!text-lg">
                <span className="text-red-500 mr-1">Çoooook</span>
                <span>hızlı npm gibi kurye</span>
              </div>
            </div>
            <div className="pl-10 pt-5 flex text-xl text-white">
              <button className="pt-3 pb-3 pr-4 pl-4 rounded-full bg-white text-[#CE2829] text-xs font-semibold">
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto w-2/3 text-center pb-15">
          <p className="elyazisi text-[2rem] text-[#CE2829]">en çok paketlenen menüler</p>
          <h2 className="text-[2.5rem] font-semibold">Acıktıran Kodlara Doyuran Lezzetler</h2>
        </div>

        <div className="flex justify-center p-6">
          <CategoryPills />
        </div>
      </section>

      <section className="bg-[#FAF7F2] flex justify-center p-6 pb-20 max-sm:flex-col max-sm:items-center">
        <PromoCard />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Home
