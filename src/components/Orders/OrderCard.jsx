import ApproveButton from "../Buttons/ApproveButton";
import DisapproveButton from "../Buttons/DisapproveButton";
import OrderModal from "./OrderModal";
import useModal from "../../hooks/useModal";
import defaultImage from "../../assets/default_image_service.jpg";
import { HOST_API } from "../../utils/constants";

export default function OrderCard({
    order, 
    setDisplayApproveModal, 
    setDisplayCancelModal, 
    isUpdated, 
    setIsUpdated
}){
    const [displayModal,handleModal] = useModal();
    let component = (<></>);

    const approveOrder = () => {
        fetch(`http://${HOST_API}:9090/api/v1/orders/${order?.id}/approve`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res)=>res.json()).then((res)=>{
            if(res.status !== 200) return;
            if(displayModal) handleModal();
            setDisplayCancelModal(false);
            setDisplayApproveModal(true);
            setIsUpdated(!isUpdated);
            setTimeout(()=>setDisplayApproveModal(false),5000);
        }).catch((e)=>{
            console.log(e);
        });
    };

    const disapproveOrder = () => {
        fetch(`http://${HOST_API}:9090/api/v1/orders/${order?.id}/disapprove`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res)=>res.json()).then((res)=>{
            if(res.status !== 200) return;
            if(displayModal) handleModal();
            setDisplayApproveModal(false);
            setDisplayCancelModal(true);
            setIsUpdated(!isUpdated);
            setTimeout(()=>setDisplayCancelModal(false),5000);
        }).catch((e)=>{
            console.log(e)
        });
    };

    if(order?.approval){
        component = (<p className="font-semibold font-md text-xl text-center text-wrap">
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
                src={order?.service?.picture ? order?.service?.picture : defaultImage} 
                alt="Imagen Producto" 
                className="w-[84px] h-[84px] rounded-l" 
            />
            <p className="font-bold text-[24px] cursor-pointer" onClick={handleModal}>
                Orden #{order?.id}
            </p>
        </div>
        <div className={`flex gap-4 items-center justify-around pr-2 max-h-[50%] `}>
            {component}
        </div>
    </div>
    );
}