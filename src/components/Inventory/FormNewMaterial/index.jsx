import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const FormNewMaterial = ({setDisplayForm, typesMaterial, setIsUpdated}) => {
    const [formData, setFormData] = useState({});
    const [messageDisplay,setMessageDisplay] = useState(false);
    const [errorDisplay,setErrorDisplay] = useState(false);
    const [errorMessage,setErrorMessage] = useState("Ups! Ha ocurrido un error");
    const hiddeForm = () => setDisplayForm(false);

    const updateFormData = (e)=>{
        setIsUpdated(false);
        setMessageDisplay(false);
        setErrorDisplay(false);
        let { name, value } = e.target;
        if(name.includes("price") || name.includes("quantity")) value = parseInt(value);
        if(name.includes("type") && value === 0) return;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const createMaterial = async (e) => {
        e.preventDefault();
        const errors = {
            409: "Material ya existente",
            400: "Ups! Ha ocurrido un error"
        };
        await fetch("http://localhost:9090/api/v1/inventory/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((res)=>res.json())
            .then((data)=>{
                if(data.status !== 200){
                    setErrorMessage(errors[data.status]);
                    setErrorDisplay(true);
                }else{
                    setMessageDisplay(true);
                    setIsUpdated(true);
                }
            })
            .catch((e)=>{
                setErrorMessage(errors[400]);
                setErrorDisplay(true);
            });
        setFormData({});
    };

    return (
        <div 
            className="fixed top-0 left-0 bg-black bg-opacity-25 w-[100%] h-[100%] px-80" 
            onClick={hiddeForm}
        >
            <form 
                className="bg-white min-w-[400px] p-5 flex flex-wrap rounded mt-7" 
                onClick={(e)=>e.stopPropagation()}
                onSubmit={createMaterial}
            >
                <div className="w-full flex justify-between">
                    <h2 className="font-bold text-[36px]">Agregar Material</h2>
                    <input type="submit" value="Crear" className="bg-[#3166B5] text-white p-2 px-5 rounded  cursor-pointer align-middle mr-6 font-semibold"/>
                </div>
                <div className="p-3 flex flex-col w-1/2">
                    <label htmlFor="name">Nombre</label>
                    <input name="name" id="name" type="text" placeholder="Papel" className="w-1/2 block p-2 text-md border border-gray-400 rounded-lg focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none" onChange={updateFormData} required/>
                </div>
                <div className="p-3 flex flex-col w-1/2">
                    <label htmlFor="price">Precio</label>
                    <input name="price" id="price" type="number" placeholder="$10000" className="w-1/2 block p-2 text-md border border-gray-400 rounded-lg focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none" onChange={updateFormData} required/>
                </div>
                <div className="p-3 flex flex-col w-1/2">
                    <label htmlFor="quantity">Cantidad</label>
                    <input name="quantity" id="quantity" type="number" placeholder="100" className="w-1/2 block p-2 text-md border border-gray-400 rounded-lg focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none" onChange={updateFormData} required/>
                </div>
                <div className="p-3 flex flex-col w-1/2">
                    <label htmlFor="Tipo">Tipo</label>
                    <select name="type" id="type" className="w-1/2 cursor-pointer block p-2 text-md  border border-gray-400 rounded-lg focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none "  onChange={updateFormData}>
                        <option defaultValue hidden selected>Seleccione el tipo</option>
                        <option value={0}>N/A</option>
                        {typesMaterial?.map(({id, name})=>
                            <option value={id} key={id}>{name}</option>
                        )}
                    </select>
                </div>
                {errorDisplay && 
                    <div className="rounded bg-red-400 p-4 flex gap-3 text-white w-full">
                        <FontAwesomeIcon className=" w-6 h-6" icon={faCircleExclamation}/>
                        {errorMessage}
                    </div>
                }
                {messageDisplay && 
                    <div className="rounded bg-green-500 p-4 flex gap-3 text-white w-full">
                        <FontAwesomeIcon className="w-6 h-6" icon={faCheckCircle}/>
                        Registrado Correctamente
                    </div>
                }
            </form>
        </div>
    );
};

export default FormNewMaterial;