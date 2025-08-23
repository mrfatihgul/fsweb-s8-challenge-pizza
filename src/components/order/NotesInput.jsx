function NotesInput({ siparisNotu, notGir }) {
    return (
        <div className='screenwidth w-1/4 flex justify-start font-semibold pb-6'>
            <input 
            type="text" 
            value={siparisNotu} 
            onChange={notGir} 
            placeholder="Siparişine eklemek istediğin bir not var mı?" 
            className="placeholder:text-xs placeholder:text-[#5F5F5F] bg-[#F8F5EF] text-[#292929] text-xs font-light py-3 px-4 rounded-lg appearance-none focus:outline-none w-full"
            />
        </div>
    );
}

export default NotesInput;