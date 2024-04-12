import ApproveButton from "../Buttons/ApproveButton";
import DisapproveButton from "../Buttons/DisapproveButton";

export default function OrderApproveCard({order}){
    return (
    <div className="w-[100%] bg-white rounded-md flex justify-between">
        <div className="flex gap-4 items-center">
            <img 
                src={order.image} 
                alt="Imagen Producto" 
                className="w-[84px] h-[84px] rounded-l" 
            />
            <p className="font-bold text-[24px]">{order.name}</p>
        </div>
        <div className="flex gap-4 items-center justify-around pr-2">
            <DisapproveButton />
            <ApproveButton />
        </div>
    </div>
    );
}