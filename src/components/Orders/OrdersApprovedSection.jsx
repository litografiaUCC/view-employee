import OrderCard from "./OrderCard";
import serviceImage from "../../assets/paper.jpg";

export default function OrdersApprovedSection({ordersApproved}){

    /* ordersApproved = [{
        id: 1,
        service: {
            name: "Nombre servicio",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas optio animi deleniti, delectus aut blanditiis expedita architecto quisquam pariatur sequi suscipit ab voluptates ut? Ut adipisci fuga corrupti omnis.",
            picture: serviceImage
        },
        client: {
            name: "Pedro"
        }
    },{
        id: 2,
        service: {
            name: "Nombre servicio",
            description: "Esto es una descripcion corta",
            picture: serviceImage
        },
        client: {
            name: "Luis",
            lastName: "Rios"
        }
    },{
        id: 3,
        service: {
            name: "Nombre servicio",
            picture: serviceImage
        },
        client: {
            name: "Juan",
            lastName: "Rios"
        }
    },{
        id: 4,
        service: {
            name: "Nombre servicio",
            description: "Esto es una descripcion corta",
            picture: serviceImage
        },
        client: {
            name: "Pedro"
        }
    }]; */

    return (
    <section className="pl-[10%] pr-[10%] pt-[2.5%] pb-[1%] flex flex-wrap gap-5">
        <h2 className="font-bold text-[36px] capitalize">Pedidos aprobados</h2>
        <div className="flex flex-col w-full gap-4 p-4 bg-[#D6D6D6] rounded-md max-h-[calc(240px+6rem)] overflow-y-auto">
            {ordersApproved.length === 0 && 
                <p className="bg-white rounded-md p-4 text-lg">
                    No hay pedidos aprobados
                </p>
            }
            {ordersApproved?.map((order, index) => <OrderCard key={`apr-${index}`} order={order}/>)}
        </div>
    </section>
    );
}