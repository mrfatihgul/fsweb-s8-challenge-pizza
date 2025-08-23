function Footer() {
    return (
        
        <footer className="bg-[#292929] px-4 md:px-16 lg:px-28 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col space-y-3 mt-8">
                    <img src="images/iteration-2-images/footer/logo-footer.svg" className="w-30 mb-10"></img>
                    <div className="flex gap-2">
                        <img src="images/iteration-2-images/footer/icons/icon-1.png" className="h-8"/>
                        <p className="text-white">341 Londonderry Road, Istanbul Türkiye</p>
                    </div>
                    <div className="flex gap-2">
                        <img src="images/iteration-2-images/footer/icons/icon-2.png"/>
                        <p className="text-white">aciktim@teknolojikyemekler.com</p>
                    </div>
                    <div className="flex gap-2">
                        <img src="images/iteration-2-images/footer/icons/icon-3.png"/>
                        <p className="text-white">+90 216 123 45 67</p>
                    </div>
                    
                </div>
                <div>
                    <h2 className="text-lg mt-8 mb-6 text-white font-semibold">Sıccacık Menüler</h2>
                    <ul className="flex flex-col space-y-2">
                        <li><p className="text-white font-light">Terminal Pizza</p></li>
                        <li><p className="text-white font-light">5 Kişilik Hackathlon Pizza</p></li>
                        <li><p className="text-white font-light">useEffect Tavuklu Pizza</p></li>
                        <li><p className="text-white font-light">Beyaz Console Frosty</p></li>
                        <li><p className="text-white font-light">Testler Geçti Mutlu Burger</p></li>
                        <li><p className="text-white font-light">Position Absolute Acı Burger</p></li>
                    </ul>
                </div>
                <div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-white mt-8">Instagram</h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <img src="images/iteration-2-images/footer/insta/li-0.png"/>
                            <img src="images/iteration-2-images/footer/insta/li-1.png"/>
                            <img src="images/iteration-2-images/footer/insta/li-2.png"/>
                        </div>
                        <div className="flex gap-3">
                            <img src="images/iteration-2-images/footer/insta/li-3.png"/>
                            <img src="images/iteration-2-images/footer/insta/li-4.png"/>
                            <img src="images/iteration-2-images/footer/insta/li-5.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between border-gray-500 border-t pt-6 mt-15 text-gray-300 mt-6">
                <p className="text-white">2023 Teknolojik Yemekler</p>
                <img src="images/iteration-2-images/footer/twitter.png" className="text-white w-5 h-4"/>
            </div>
        </footer>

    )
}

export default Footer