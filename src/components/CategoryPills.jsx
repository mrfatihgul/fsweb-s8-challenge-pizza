import { useState } from "react";

function CategoryPills() {

    const categories = [
        { id: "yeni", label: "Ramen", icon: "images/iteration-2-images/icons/1.svg" },
        { id: "pizza", label: "Pizza", icon: "images/iteration-2-images/icons/2.svg" },
        { id: "burger", label: "Burger", icon: "images/iteration-2-images/icons/3.svg" },
        { id: "kizartma", label: "French fries", icon: "images/iteration-2-images/icons/4.svg" },
        { id: "fastfood", label: "Fast food", icon: "images/iteration-2-images/icons/5.svg" },
        { id: "gazli", label: "Soft drinks", icon: "images/iteration-2-images/icons/6.svg" }
    ];

    const [selected, setSelected] = useState(null);

    function KategoriDiz2 (){
        return categories.map(function(kategori){
            if (selected === kategori.id) {
                return (
                    <button key={kategori.id} className="rounded-full bg-[#292929] text-white p-5 flex items-center gap-3" onClick={function () {setSelected(kategori.id);}}>
                        <img src={kategori.icon} alt="" className="h-10 w-10" />
                        <span>{kategori.label}</span>
                    </button>
                )
        }
            else {
                return (
                    <button key={kategori.id} className="rounded-full bg-white p-5 flex items-center gap-3" onClick={function () {setSelected(kategori.id);}}>
                        <img src={kategori.icon} alt="" className="h-10 w-10" />
                        <span>{kategori.label}</span>
                    </button>
                )
            }    
    })
    }

    return (
    <div className="flex gap-5">
        {KategoriDiz2()}
    </div>
    )
}

export default CategoryPills