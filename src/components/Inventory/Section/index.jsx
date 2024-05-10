import { useState } from "react";
import SearchForm from "../../SearchForm";
import SelectForm from "../../SelectForm";
import MaterialCard from "../MaterialCard";
import { fetchInventory } from "../../../utils/fetchs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import FormNewMaterial from "../FormNewMaterial";
import useGetTypesMaterial from "../../../hooks/useGetTypesMaterial";

export default function InventorySection({data, setData, setIsUpdated}){
    const [addStockActive, setAddStockActive] = useState(false);
    const [formData, setFormData] = useState({});
    const [displayForm, setDisplayForm] = useState(false);
    const [typesMaterial, setTypesMaterial] = useGetTypesMaterial();

    const addStock = () => {
        if(addStockActive) {
            for(const id in formData){
                fetchInventory(`/${id}/quantityUpdate?quantity=${formData[id]}`,"PATCH");
                const index = data.findIndex(material => material.id === parseInt(id));
                const newData = [...data];
                newData[index]["quantity"] = formData[id];
                setData(newData);
            }
            setFormData({});
        }
        setAddStockActive(!addStockActive);
    };

    const handleForm = () => {
        setDisplayForm(true);
    };

    return (
    <section  className="p-[10%] pt-[2.5%] flex flex-wrap gap-5">
        <div className="flex w-[100%] pl-[1.5%] pr-[1.5%] justify-between">
            <h1 className=" font-bold text-[36px] ">Inventario</h1>
            <div className="flex justify-around w-[65%]">
                <SearchForm />
                <SelectForm types={typesMaterial}/>
                <button className="bg-[#3166B5] capitalize font-bold text-white pl-5 pr-5 rounded-lg hover:bg-[#34638e]" onClick={addStock}>
                    {!addStockActive && "Agregar stock"}
                    {addStockActive && "Terminar Cambios"}
                </button>
            </div>
        </div>
        <div className="w-[100%] flex flex-wrap gap-5 justify-around">
            {data?.map((value, index)=><MaterialCard key={index} addStockActive={addStockActive} data={value} formData={formData} setFormData={setFormData}/>)}
        </div>
        <button className="fixed bottom-10 right-16 bg-[#3166B5] capitalize font-bold text-[24px] text-white min-w-14 min-h-14 rounded-full hover:bg-[#34638e] text-center flex justify-center items-center add-stock-button transition-all hover:px-5" onClick={handleForm}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
        {displayForm && <FormNewMaterial setDisplayForm={setDisplayForm} typesMaterial={typesMaterial} setIsUpdated={setIsUpdated}/>}
    </section>
    )
}