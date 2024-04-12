import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import useLoading from "../../hooks/useLoading";
import OrdersApproveSection from "../../components/Orders/OrdersApproveSection";
import OrdersApprovedSection from "../../components/Orders/OrdersApprovedSection";

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