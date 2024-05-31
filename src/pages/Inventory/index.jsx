import Navbar from "../../components/Navbar";

import Loading from "../../components/Loading";
import InventorySection from "../../components/Inventory/Section";
import useFetchInventory from "../../hooks/useFetchInventory";

const Inventory = ()=>{
    const [data, loading, setData, setIsUpdated] = useFetchInventory();

    console.log(data);

    return (
        <>
        <Navbar route="/inventory"></Navbar>
        {loading ? 
            <Loading /> 
        : 
            <InventorySection data={data} setData={setData} setIsUpdated={setIsUpdated}/>
        }
        </>
    );
};

export default Inventory;