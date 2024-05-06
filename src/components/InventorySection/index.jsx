import { useState } from "react";
import SearchForm from "../SearchForm";
import SelectForm from "../SelectForm";
import MaterialCard from "../MaterialCard";
import fetchInvetory from "../../utils/fetchs";

export default function InventorySection({data, setData}){
    const [addStockActive, setAddStockActive] = useState(false);
    const [formData, setFormData] = useState({});

    const typesMaterial = [
        
    ];

    const addStock = () => {
        if(addStockActive) {
            for(const id in formData){
                fetchInvetory(`/${id}/quantityUpdate?quantity=${formData[id]}`,"PATCH");
                const index = data.findIndex(material => material.id == id);
                const newData = [...data];
                newData[index]["quantity"] = formData[id];
                setData(newData);
            }
            setFormData({});
        }
        setAddStockActive(!addStockActive);
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
    </section>
    )
}