import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import useLoading from "../../hooks/loading";

const Orders = ()=>{
  const [loading, setLoading] = useLoading();


  return (
      <>
        {loading && <Loading />}
        <Navbar route="/orders"/>
        <section className="pl-[10%] pr-[10%] pt-[2.5%] flex flex-wrap gap-5">
          <h2 className="font-bold text-[36px] capitalize">Pedidos solicitados</h2>
        </section>
        <section className="pl-[10%] pr-[10%] pt-[2.5%] flex flex-wrap gap-5">
          <h2 className="font-bold text-[36px] capitalize">Pedidos aprovados</h2>
        </section>
      </>
    )
};

export default Orders;