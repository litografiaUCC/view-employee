export default function UserInfoItem({label, data, isEdit=false, isEditable = false}){
    return (
    <div className="flex flex-col p-1">
        <p className="font-bold text-xl capitalize">{label}:</p>
        {(isEdit && isEditable)  ? <input className="text-lg w-auto pl-4 text-md text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none" placeholder={data} defaultValue={data} onChange={(e)=>{console.log(e.target.value)}}/>:
        <p className="text-lg pl-4">{data}</p>}
    </div>
    );
}