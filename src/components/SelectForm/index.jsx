export default function SelectForm(){
    return (
        <form className='flex w-[30%]'>
            <select name="type" id="type" className="block w-full p-4 text-md text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none appearance-none">
                <option selected disabled hidden>Filtrar por tipo</option>
                <option value="type">Type</option>
            </select>
        </form>
    );
}