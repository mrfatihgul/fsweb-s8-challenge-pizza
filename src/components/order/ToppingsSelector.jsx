function ToppingsSelector({malzemeUyarıMesajı}) {
    return(
        <div className='w-full flex flex-col items-center gap-4 pb-30'>
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
        </div>
    ); 
}

export default ToppingsSelector;