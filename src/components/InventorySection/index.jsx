import { useState } from "react";
import SearchForm from "../SearchForm";
import SelectForm from "../SelectForm";
import MaterialCard from "../MaterialCard";

export default function InventorySection(){
    const [addStockActive, setAddStockActive] = useState(false);
    
    const typesMaterial = [
        {id:1, name: "Papel"},
        {id:2, name: "Tinta"}
    ];

    const addStock = () => {
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
            {[20,10,40,100,15,10].map((value, index)=><MaterialCard key={index} addStockActive={addStockActive} quantity={value}/>)}
        </div>
    </section>
    )
}