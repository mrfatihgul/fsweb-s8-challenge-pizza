import { Link } from "react-router-dom";

function PizzaHeader(){
    return(
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
    );
}

export default PizzaHeader;