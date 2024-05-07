import OrderCard from "./OrderCard";

export default function OrdersApproveSection({ordersToApproved}){
    return (
    <section className="pl-[10%] pr-[10%] pt-[2.5%] flex flex-wrap gap-5">
        <h2 className="font-bold text-[36px] capitalize">Pedidos solicitados</h2>
        <div className="flex flex-col w-full gap-4 p-4 bg-[#D6D6D6] rounded-md">
            {ordersToApproved.length === 0 && 
            <p className="bg-white rounded-md p-4 text-lg">
                No hay pedidos por ser aprobados
            </p>}
            {ordersToApproved?.map((order, index) => <OrderCard key={`ord-${index}`} order={order}/>)}
        </div>
    </section>
    );
}