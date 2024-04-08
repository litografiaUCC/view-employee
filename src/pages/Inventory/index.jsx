import MaterialCard from "../../components/MaterialCard";
import Navbar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";
import SelectForm from "../../components/SelectForm";

const Inventory = ()=>{
    return (
        <>
        <Navbar route="/inventory"></Navbar>
        <section  className="p-[10%] pt-[2.5%] flex flex-wrap gap-5">
            <div className="flex w-[100%] pl-[1.5%] pr-[1.5%] justify-between">
                <h1 className=" font-bold text-[36px] ">Inventario</h1>
                <div className="flex justify-around w-[65%]">
                    <SelectForm />
                    <SearchForm />
                    <button className="bg-[#3166B5] capitalize font-bold text-white pl-5 pr-5 rounded-lg hover:bg-[#34638e]">
                        Agregar stock
                    </button>
                </div>
            </div>
            <div className="w-[100%] flex flex-wrap gap-5 justify-around">
                <MaterialCard />
                <MaterialCard />
                <MaterialCard />
                <MaterialCard />
                <MaterialCard />
                <MaterialCard />
            </div>
        </section>
        </>
    );
};

export default Inventory;