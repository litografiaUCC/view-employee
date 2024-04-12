import okIcon from "../../assets/ok_icon.svg";

export default function ApproveButton(){
    return (
        <button 
            className="bg-[#34a132] hover:bg-[hsl(119,53%,33%)] text-white rounded h-[50%] pr-3 pl-3 text-xl font-normal flex items-center gap-1"
        >
            <img src={okIcon} alt="Icon Check" />
            Aprobar
        </button>
    );
}