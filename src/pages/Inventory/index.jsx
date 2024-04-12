

import Navbar from "../../components/Navbar";

import Loading from "../../components/Loading";
import useLoading from "../../hooks/useLoading";
import InventorySection from "../../components/InventorySection";

const Inventory = ()=>{
    
    const [loading, setLoading] = useLoading();
    
    return (
        <>
        <Navbar route="/inventory"></Navbar>
        {loading && <Loading />}
        {!loading && <InventorySection />}
        </>
    );
};

export default Inventory;