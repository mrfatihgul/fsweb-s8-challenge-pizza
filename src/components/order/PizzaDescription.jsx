function PizzaDescription(){
    return (
        <>
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
        </>
    );
}

export default PizzaDescription;