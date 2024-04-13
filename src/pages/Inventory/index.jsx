

import Navbar from "../../components/Navbar";

import Loading from "../../components/Loading";
import InventorySection from "../../components/InventorySection";
import useFetchInventory from "../../hooks/useFetchInventory";

const Inventory = ()=>{
    const [data, loading, setData, setLoading] = useFetchInventory("http://192.168.1.6:8081/api/v1/inventory/");

    return (
        <>
        <Navbar route="/inventory"></Navbar>
        {loading && <Loading />}
        {!loading && <InventorySection data={data}/>}
        </>
    );
};

export default Inventory;