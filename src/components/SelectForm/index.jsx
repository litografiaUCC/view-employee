import './SelectForm.css';

export default function SelectForm({types}){
    return (
        <div className='flex w-[30%]'>
            <select name="type" id="type" className=" cursor-pointer block w-full p-4 text-md text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none appearance-none type-select">
                <option defaultValue value="">Filtrar por tipo</option>
                {types.map((type) => {
                    return <option key={type.id} value={type.id}>{type.name}</option>
                })}
            </select>
        </div>
    );
}