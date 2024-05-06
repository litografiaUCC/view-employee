import Navbar from "../../components/Navbar";

import Loading from "../../components/Loading";
import InventorySection from "../../components/InventorySection";
import useFetchInventory from "../../hooks/useFetchInventory";

const Inventory = ()=>{
    const [data, loading, setData] = useFetchInventory();

    return (
        <>
        <Navbar route="/inventory"></Navbar>
        {loading && <Loading />}
        {!loading && <InventorySection data={data} setData={setData} />}
        </>
    );
};

export default Inventory;