function QuantityandTotal({ sayiAzalt, sayiArttir, adet, secimlerTutari, toplamTutar, isValid }){
    return(
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
                    <span className='text-xs text-[#5F5F5F]'>{secimlerTutari.toFixed(2)}₺</span>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-xs text-[#CE2829]'>Toplam</span>
                    <span className='text-xs text-[#CE2829]'>{toplamTutar.toFixed(2)}₺</span>
                </div>
                </div>
            </div>
            <div className='py-2 border bg-[#FDC913] hover:bg-yellow-500 border-[#FDC913] rounded w-full'>
                <button type="submit" className='flex flex-row justify-center text-xs w-full'>
                SİPARİŞ VER
                </button>
            </div>
            </div>
            
        </div>
    );
}

export default QuantityandTotal;