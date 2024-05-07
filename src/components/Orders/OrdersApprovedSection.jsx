import OrderCard from "./OrderCard";

export default function OrdersApprovedSection({ordersApproved}){
    return (
    <section className="pl-[10%] pr-[10%] pt-[2.5%] pb-[1%] flex flex-wrap gap-5">
        <h2 className="font-bold text-[36px] capitalize">Pedidos aprobados</h2>
        <div className="flex flex-col w-full gap-4 p-4 bg-[#D6D6D6] rounded-md">
            {ordersApproved.length === 0 && 
            <p className="bg-white rounded-md p-4 text-lg">
                No hay pedidos aprobados
            </p>}
            {ordersApproved?.map((order, index) => <OrderCard key={`apr-${index}`} order={order}/>)}
        </div>
    </section>
    );
}