function CategoryChips() {

    const categories = [
        { id: "yeni", label: "YENİ! Kore", icon: "images/iteration-2-images/icons/1.svg" },
        { id: "pizza", label: "Pizza", icon: "images/iteration-2-images/icons/2.svg" },
        { id: "burger", label: "Burger", icon: "images/iteration-2-images/icons/3.svg" },
        { id: "kizartma", label: "Kızartmalar", icon: "images/iteration-2-images/icons/4.svg" },
        { id: "fastfood", label: "Fast food", icon: "images/iteration-2-images/icons/5.svg" },
        { id: "gazli", label: "Gazlı İçecek", icon: "images/iteration-2-images/icons/6.svg" }
    ];

    function KategoriDiz (){
        return categories.map(function(kategori){
            return (
                <button key={kategori.id} className="flex max-sm:flex-col items-center gap-3">
                    <img src={kategori.icon} className="h-10 w-10 min-h-[2rem] min-w-[2rem] flex-shrink-0"/>
                    <span className="max-sm:text-xs font-semibold">{kategori.label}</span>
                </button>
            )
        })
    }

    return (
    <div className="flex max-sm:grid max-sm:grid-cols-6 gap-28 max-sm:gap-3">
        {KategoriDiz()}
    </div>
    )
}

export default CategoryChips