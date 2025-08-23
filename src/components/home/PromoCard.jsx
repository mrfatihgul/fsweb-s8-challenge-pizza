function PromoCard(){

    const cards = [
        {id: "terminal", label: "Terminal Pizza", icon: "images/iteration-2-images/pictures/food-1.png", puan:"4.9", yorum:"(200)", fiyat:"60"},
        {id: "position", label: "Position Absolute Acı Pizza", icon: "images/iteration-2-images/pictures/food-2.png", puan:"4.9", yorum:"(928)", fiyat:"85"},
        {id: "useeffect", label: "useEffect Tavuklu Burger", icon: "images/iteration-2-images/pictures/food-3.png", puan:"4.9", yorum:"(462)", fiyat:"75"}
    ]

    function KutulariDiz() {
        return cards.map(function(card) {
            return (
            <div key={card.id} className="rounded-xl w-100 h-100 bg-white text-black p-5 flex flex-col items-center">
                <img src={card.icon} className="h-75 w-75" />
                <div className="w-full">
                    <span className="mt-3 text-left font-semibold text-lg">{card.label}</span>
                    <div className="flex justify-between mt-4">
                        <span className="font-extralight text-xs">{card.puan}</span>
                        <span className="font-extralight text-xs">{card.yorum}</span>
                        <span className="font-bold text-base relative -top-1">{card.fiyat}</span>
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