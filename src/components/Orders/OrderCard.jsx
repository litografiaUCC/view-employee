import { useState } from "react";
import ApproveButton from "../Buttons/ApproveButton";
import DisapproveButton from "../Buttons/DisapproveButton";
import OrderModal from "./OrderModal";
import useModal from "../../hooks/useModal";

export default function OrderCard({order}){
    const [displayModal,handleModal] = useModal();
    let component = (<></>);

    if(order.prepared_by !== undefined){
        component = (<p className=" font-semibold font-md text-xl text-center">
            A elaborar por: <br />{order.prepared_by}
        </p>);
    }else{
        component =(<>
            <DisapproveButton />
            <ApproveButton />
        </>);
    }

    return (
    <div className="w-[100%] bg-white rounded-md flex justify-between">
        {displayModal && <OrderModal order={order} handleModal={handleModal}>
            {component}    
        </OrderModal>}
        <div className="flex gap-4 items-center">
            <img 
                src={order.image} 
                alt="Imagen Producto" 
                className="w-[84px] h-[84px] rounded-l" 
            />
            <p className="font-bold text-[24px] cursor-pointer" onClick={handleModal}>{order.name}</p>
        </div>
        <div className="flex gap-4 items-center justify-around pr-2">
            {component}
        </div>
    </div>
    );
}