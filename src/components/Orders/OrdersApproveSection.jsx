import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderCard from "./OrderCard";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons/faCheckCircle";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import "./animation.css";
import serviceImage from "../../assets/paper.jpg";

export default function OrdersApproveSection({ordersToApproved}){
    const [displayApproveModal, setDisplayApproveModal] = useState(false);
    const [displayCancelModal, setDisplayCancelModal] = useState(false);

    /* ordersToApproved = [{
        id: 1,
        service: {
            name: "Nombre servicio",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas optio animi deleniti, delectus aut blanditiis expedita architecto quisquam pariatur sequi suscipit ab voluptates ut? Ut adipisci fuga corrupti omnis.",
            picture: serviceImage
        }
    },{
        id: 2,
        service: {
            name: "Nombre servicio",
            description: "Esto es una descripcion corta",
            picture: serviceImage
        }
    },{
        id: 3,
        service: {
            name: "Nombre servicio",
            picture: serviceImage
        }
    },{
        id: 4,
        service: {
            name: "Nombre servicio",
            description: "Esto es una descripcion corta",
            picture: serviceImage
        }
    }]; */

    return (
    <section className="pl-[10%] pr-[10%] pt-[2.5%] flex flex-wrap gap-5">
        <h2 className="font-bold text-[36px] capitalize">Pedidos solicitados</h2>
        <div className="flex flex-col w-full gap-4 p-4 bg-[#D6D6D6] rounded-md max-h-[calc(240px+6rem)] overflow-y-auto">
            {ordersToApproved.length === 0 && 
                <p className="bg-white rounded-md p-4 text-lg">
                    No hay pedidos por ser aprobados
                </p>
            }
            {ordersToApproved?.map((order, index) => 
                <OrderCard key={`ord-${index}`} order={order} setDisplayApproveModal={setDisplayApproveModal} setDisplayCancelModal={setDisplayCancelModal} />
            )}
        </div>
        {displayApproveModal &&
            <div className="fixed bottom-3 right-3 flex rounded bg-green-500 text-white text-2xl justify-center items-center gap-5 p-5 w-[310px] animation-modal">
                <FontAwesomeIcon className="w-24 h-24" icon={faCheckCircle} />
                <p className="text-wrap text-center">Fue Aprovado con Éxito</p>
            </div>
        }
        {displayCancelModal &&
            <div className="fixed bottom-3 right-3 flex rounded bg-red-500 text-white text-2xl justify-center items-center gap-5 p-5 w-[310px] animation-modal">
                <FontAwesomeIcon className="w-24 h-24" icon={faXmarkCircle} />
                <p className="text-wrap text-center">Se ha desaprobado el pedido</p>
            </div>
        }
    </section>
    );
}