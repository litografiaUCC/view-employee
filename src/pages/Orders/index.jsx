import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import OrdersApproveSection from "../../components/Orders/OrdersApproveSection";
import OrdersApprovedSection from "../../components/Orders/OrdersApprovedSection";
import useFetchOrders from "../../hooks/useFetchOrders";

const Orders = ()=>{
  const [
    ordersApproved, 
    ordersToApproved, 
    loading, 
    setOrdersApproved, 
    setOrdersToApproved
  ] = useFetchOrders();

  return (
      <>
        <Navbar route="/orders"/>
        {loading ? 
        <Loading /> 
        : 
        <>
          <OrdersApproveSection ordersToApproved={ordersToApproved} />
          <OrdersApprovedSection ordersApproved={ordersApproved} />
        </>}
      </>
    )
};

export default Orders;