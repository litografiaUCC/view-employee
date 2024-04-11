import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import useLoading from "../../hooks/loading";
import OrdersApproveSection from "../../components/OrdersApproveSection";
import OrdersApprovedSection from "../../components/OrdersApprovedSection";

const Orders = ()=>{
  const [loading, setLoading] = useLoading();


  return (
      <>
        <Navbar route="/orders"/>
        {loading && <Loading />}
        {!loading && <>
          <OrdersApproveSection />
          <OrdersApprovedSection />
        </>}
      </>
    )
};

export default Orders;