export default function SearchForm(){
    return(  
    <form className='flex w-[30%]'>   
        <input type="search" id="search" className="block w-full p-4 text-md text-gray-900 border border-gray-400 rounded-l-lg bg-gray-50 focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none" placeholder="Buscar" />
        <button type="submit" className="text-white bg-[#3166B5] hover:bg-[#34638e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-4 py-2">
            <div className="flex items-center pointer-events-none">
                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
        </button>
    </form>
    );
}