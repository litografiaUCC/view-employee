import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cancelIcon from "../../assets/x_icon.svg";

export default function DisapproveButton({onClick}){
    return (
        <button 
            className="bg-[#f92424] hover:bg-[#953333] text-white rounded px-3 py-2 text-xl font-normal flex items-center gap-1"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faXmark} className="w-9 h-7"/>
            Desaprobar
        </button>
    );
}