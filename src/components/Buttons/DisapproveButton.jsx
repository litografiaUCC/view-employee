import cancelIcon from "../../assets/x_icon.svg";

export default function DisapproveButton(){
    return (
        <button 
            className="bg-[#f92424] hover:bg-[#953333] text-white rounded h-[50%] pr-3 pl-3 text-xl font-normal flex items-center gap-1"
        >
            <img src={cancelIcon} alt="Cancel Icon" />
            Desaprobar
        </button>
    );
}