import ApproveButton from "../Buttons/ApproveButton";
import DisapproveButton from "../Buttons/DisapproveButton";
import OrderModal from "./OrderModal";
import useModal from "../../hooks/useModal";

export default function OrderCard({order, setDisplayApproveModal, setDisplayCancelModal}){
    const [displayModal,handleModal] = useModal();
    let component = (<></>);

    const approveOrder = () => {
        console.log(order?.id);
        if(displayModal) handleModal();
        setDisplayCancelModal(false);
        setDisplayApproveModal(true);
        setTimeout(()=>setDisplayApproveModal(false),5000);
    };

    const disapproveOrder = () => {
        console.log(order?.id);
        if(displayModal) handleModal();
        setDisplayApproveModal(false);
        setDisplayCancelModal(true);
        setTimeout(()=>setDisplayCancelModal(false),5000);
    };

    if(order?.client?.name !== undefined){
        component = (<p className=" font-semibold font-md text-xl text-center text-wrap">
            Ordenado por: <br />
            {order?.client?.name && order?.client?.name} {(order?.client?.lastName && order?.client?.lastName)}
        </p>);
    }else{
        component =(<>
            <DisapproveButton onClick={disapproveOrder}/>
            <ApproveButton onClick={approveOrder}/>
        </>);
    }

    return (
    <div className="w-[100%] bg-white rounded-md flex justify-between items-center">
        {displayModal && <OrderModal order={order} handleModal={handleModal}>
            {component}    
        </OrderModal>}
        <div className="flex gap-4 items-center">
            <img 
                src={order?.service?.picture} 
                alt="Imagen Producto" 
                className="w-[84px] h-[84px] rounded-l" 
            />
            <p className="font-bold text-[24px] cursor-pointer" onClick={handleModal}>
                Orden #{order?.id}
            </p>
        </div>
        <div className="flex gap-4 items-center justify-around pr-2 max-h-[50%]">
            {component}
        </div>
    </div>
    );
}