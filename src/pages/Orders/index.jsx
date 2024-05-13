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
    setOrdersToApproved,
    isUpdated, 
    setIsUpdated
  ] = useFetchOrders();

  return (
      <>
        <Navbar route="/orders"/>
        {loading ? 
        <Loading /> 
        : 
        <>
          <OrdersApproveSection 
            ordersToApproved={ordersToApproved} 
            isUpdated={isUpdated} 
            setIsUpdated={setIsUpdated} 
          />
          <OrdersApprovedSection 
            ordersApproved={ordersApproved} 
            isUpdated={isUpdated} 
            setIsUpdated={setIsUpdated} 
          />
        </>}
      </>
    )
};

export default Orders;