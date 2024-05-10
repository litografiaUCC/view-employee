import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ApproveButton({onClick}){

    return (
        <button 
            className="bg-[#34a132] hover:bg-[hsl(119,53%,33%)] text-white rounded px-3 py-2 text-xl font-normal flex items-center gap-1" 
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faCheck} className="w-9 h-7"/>
            Aprobar
        </button>
    );
}