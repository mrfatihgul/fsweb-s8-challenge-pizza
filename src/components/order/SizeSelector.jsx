function SizeSelector({ handlePizzaSizeChange }){
    return (
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
    );
}

export default SizeSelector;