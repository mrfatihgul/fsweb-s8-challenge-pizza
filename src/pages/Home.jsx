import "./Home.css"
import CategoryChips from "../components/CategoryChips";
import CategoryPills from "../components/CategoryPills.jsx";
import { Link } from "react-router-dom";
import PromoCard from "../components/PromoCard.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <main className="banner flex flex-col justify-start items-center w-full">
        <Link className="pt-20 pb-5 w-1/4 max-w-[15rem]">
          <img src="/images/iteration-1-images/logo.svg"></img>
        </Link>
        <div className="slogan text-white w-1/3 mx-auto text-center">
            KOD ACIKTIRIR PİZZA, DOYURUR
        </div>
        <Link to="/order">
            <span className="buton font-semibold rounded-full block mt-5 bg-[#FDC913] py-4 px-10 hover:bg-[#e5b90f]">
                ACIKTIM
            </span>
        </Link>
      </main>

      <section className="bg-white flex justify-center p-6">
        <CategoryChips />
      </section>

      <section className="bg-[#FAF7F2] w-full">
        <div className="grid grid-cols-2 gap-4 pt-30 pb-30 w-2/3 mx-auto">
          <div className="bg-[url('images/iteration-2-images/cta/kart-1.png')] row-span-2 h-full rounded-lg">
          </div>
          <div className="bg-[url('images/iteration-2-images/cta/kart-2.png')] h-60 rounded-lg">
          </div>
          <div className="bg-[url('images/iteration-2-images/cta/kart-3.png')] h-60 rounded-lg">
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

      <section className="bg-[#FAF7F2] flex justify-center p-6 pb-20">
        <PromoCard />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Home
