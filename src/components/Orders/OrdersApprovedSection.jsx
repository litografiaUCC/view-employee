import OrderCard from "./OrderCard";

const order = {
    name: "100 Cuadernos pasta dura",
    image: "https://img.freepik.com/fotos-premium/cuaderno-paginas-aisladas-sobre-fondo-negro_868749-7623.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod illum ipsa atque, rerum consequuntur assumenda ut soluta non voluptas similique a officiis neque laboriosam quam delectus quasi facilis velit ipsam.",
    prepared_by: "Pedro"
};

const orders = [order, order, order];

export default function OrdersApprovedSection(){
    return (
    <section className="pl-[10%] pr-[10%] pt-[2.5%] pb-[1%] flex flex-wrap gap-5">
        <h2 className="font-bold text-[36px] capitalize">Pedidos aprobados</h2>
        <div className="flex flex-col w-full gap-4 p-4 bg-[#D6D6D6] rounded-md">
            {orders.map((order, index) => <OrderCard key={`apr-${index}`} order={order}/>)}
        </div>
    </section>
    );
}