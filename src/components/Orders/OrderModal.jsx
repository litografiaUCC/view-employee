import cancelIcon from "../../assets/x_icon.svg";
import Modal from "../Modal";
import defaultImage from "../../assets/default_image_service.jpg";

export default function OrderModal({order, handleModal, children}){
    return(
    <Modal handleModal={handleModal}>
        <div 
            className="bg-white rounded-md flex max-w-5xl gap-5"
            onClick={(e) => e.stopPropagation()}
        >
            <img 
                src={order?.service?.picture ? order?.service?.picture : defaultImage} 
                alt="Imagen Producto" 
                className="max-w-sm rounded" 
            />
            <div className="flex flex-col gap-4 justify-center">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-[24px] text-center">Orden #{order.id}</p>
                    <p className="text-[18px] text-center italic">{order?.service?.name}</p>
                    <p className="text-[18px] text-center">{order?.service?.description}</p>
                </div>
                <div className="flex gap-4 items-center justify-center h-2/6 p-6">
                    {children}
                </div>
            </div>
            <div className="relative m-2">
                <div className="absolute top-0 right-0 bg-red-600 hover:bg-[#953333] p-1 w-[24px] h-[24px] rounded cursor-pointer" onClick={handleModal}>
                    <img src={cancelIcon} className="w-[100%]" alt="Close Modal" ></img>
                </div>
            </div>
        </div>
    </Modal>
    );
}