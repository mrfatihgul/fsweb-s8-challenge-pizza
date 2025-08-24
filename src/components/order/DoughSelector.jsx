function DoughSelector({ hamur, setHamur }) {
    return (
        <>
        <div className='screenwidth w-1/2 flex flex-col justify-start gap-6'>
        <div className="mb-6 mt-10">
            <label className="block text-lg font-semibold text-[#292929] mb-5">
            Hamur Seç 
            <span className="ml-2 text-[#CE2829]">*</span>
            </label>
            
            <select
                className="w-full bg-[#F8F5EF] text-[#292929] text-xs py-3 px-4 rounded-lg appearance-none focus:outline-none"
                name="hamur"
                value={hamur}
                onChange={(e) => setHamur(e.target.value)}
                required
            >
            <option value="" disabled hidden>- Hamur Kalınlığı Seç -</option>
            <option value="Süpper İnce">Süpper İnce</option>
            <option value="Süpper Normal">Süpper Normal</option>
            <option value="Süpper Kalın">Süpper Kalın</option>
            </select>
        </div>
        </div>
        </>
    );
}

export default DoughSelector;