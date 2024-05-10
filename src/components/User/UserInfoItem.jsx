export default function UserInfoItem({label, name = null, data, onChange, isEdit=false, isEditable = false, type = "text"}){
    return (
    <div className="flex flex-col p-1">
        <label htmlFor={name} className="font-bold text-xl capitalize">
            {label}:
        </label>
        {(isEdit && isEditable)  ? 
            <input 
                name={name} id={name}
                className="text-lg w-auto pl-4 text-md text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none" 
                placeholder={data} 
                defaultValue={data} 
                onChange={onChange}
                type={type}
            />
        :
            <p className="text-lg pl-4">{data}</p>
        }
    </div>
    );
}