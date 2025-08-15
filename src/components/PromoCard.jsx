function PromoCard(){

    const cards = [
        {id: "terminal", label: "Terminal Pizza", icon: "images/iteration-2-images/pictures/food-1.png", puan:"4.9", yorum:"(200)", fiyat:"60"},
        {id: "position", label: "Position Absolute Acı Pizza", icon: "images/iteration-2-images/pictures/food-2.png", puan:"4.9", yorum:"(928)", fiyat:"85"},
        {id: "useeffect", label: "useEffect Tavuklu Burger", icon: "images/iteration-2-images/pictures/food-3.png", puan:"4.9", yorum:"(462)", fiyat:"75"}
    ]

    function KutulariDiz() {
        return cards.map(function(card) {
            return (
            <div key={card.id} className="rounded-xl w-70 h-75 bg-white text-black p-5 flex flex-col items-center">
                <img src={card.icon} className="h-50 w-50" />
                <div className="mt-5 w-full">
                    <span className="text-left font-semibold">{card.label}</span>
                    <div className="flex justify-between text-xs">
                        <span className="font-extralight">{card.puan}</span>
                        <span className="font-extralight">{card.yorum}</span>
                        <span className="font-bold">{card.fiyat}</span>
                    </div>
                </div>
            </div>
            )
        }
    
    )
    }

    return (
    <div className="flex max-sm:flex-col max-sm:items-center gap-5">
        {KutulariDiz()}
    </div>
    )
}

export default PromoCard