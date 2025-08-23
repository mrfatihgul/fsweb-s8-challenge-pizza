import './Success.css'
import { Link } from 'react-router-dom'


function Success({ orderData }) {
  return (
    <main className='background flex flex-col justify-start items-center w-full'>
      <Link to="/" className="pt-20 pb-5 w-1/4 max-w-[23rem] max-sm:w-50">
        <img src="/images/iteration-1-images/logo.svg"></img>
      </Link>
      <div className='w-1/3 max-sm:w-full mx-auto text-center pt-10'>
        <div className='text-xxxxxxl'>
            lezzetin yolda
        </div>
        <div className='feedback text-white'>
            SİPARİŞ ALINDI
        </div>
        <div className="mt-10 h-px bg-white mb-6 max-sm:w-2/3 max-sm:mx-auto"></div>
        <div className='w-1/2 mx-auto'>
          <h2 className='mt-7 mb-15 text-xl text-white'>Position Absolute Acı Pizza</h2>
          <div className="text-left w-3/5 mx-auto">
            <p className='text-white mb-3'>
              <span className='font-extralight'>Boyut: </span>
              <span className='font-semibold'>{orderData.size}</span>
            </p>
            <p className='text-white mb-3'>
              <span className='font-extralight'>Hamur: </span>
              <span className='font-semibold'>{orderData.hamur}</span>
            </p>
            <p className='text-white'>
              <span className='font-extralight'>Ek Malzemeler: </span>
              <span className='font-semibold'>{orderData.toppings.join(", ")}</span>
            </p>
          </div>

          <div className="mt-13 border border-white rounded w-4/5 max-sm:w-full mx-auto">
            <div className='p-10 flex flex-col'>
              <span className='text-l text-white font-semibold text-left mb-5'>Sipariş Toplamı</span>
              <p className='text-white mb-1 flex justify-between'>
                <span className='font-normal'>Seçimler: </span>
                <span className='font-normal'>{orderData.secimlerTutari}₺</span>
              </p>
              <p className='text-white flex justify-between'>
                <span className='font-normal'>Toplam: </span>
                <span className='font-normal'>{orderData.toplamTutar}₺</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Success
