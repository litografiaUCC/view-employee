import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultImage from '../../../assets/default_image_service.jpg';
import './MaterialCard.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { HOST_API } from '../../../utils/constants';

export default function MaterialCard({addStockActive, data, formData, setFormData, setIsUpdated}){
    const onChangeQuantityInput = (e) =>{
        setFormData({
            ...formData,
            [data.id]: data.quantity + parseInt(e.target.value),
        })
    };

    const deleteMaterial = () => {
        setIsUpdated(false);
        fetch(`http://${HOST_API}:9090/api/v1/inventory/${data?.id}/delete`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((res)=>res.json())
            .then((res)=>setIsUpdated(true))
            .catch((e)=>console.error(e));
    };


    return(
        <div className="bg-[#BBD4E3] p-[10px] rounded-md max-w-[30%] flex flex-col gap-2">
                <img src={defaultImage} alt="Imagen Papel" className='rounded-md w-full aspect-video'/>
            <div className='flex justify-between'>
                <h3 className="font-medium text-2xl capitalize">{data.name}</h3>
                <FontAwesomeIcon 
                    className='bg-red-500 hover:bg-red-900 text-white p-2 rounded w-4 h-4 cursor-pointer' 
                    icon={faTrash} 
                    onClick={deleteMaterial}
                />
            </div>
            <div 
                className='bg-[#4599E8]/[0.50] pl-5 pr-5 text-lg rounded-full w-type'
            >
                {data?.typeMaterial ? data?.typeMaterial : "Sin tipo"}
            </div>
            <p className='text-sm'>{data?.description ? data?.description : "Sin descripción"}</p>
            <div className='self-end flex flex-col items-end'>
                
                <h5 className='font-medium text-lg'>
                    {!addStockActive && "Cantidad"}
                    {addStockActive && "Cantidad a agregar"}
                </h5>
                {!addStockActive && <p className='text-lg'>{data?.quantity}</p>}
                {addStockActive && <input type='number' placeholder={data?.quantity} className='text-lg w-[50%] text-center rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none' 
                onChange={onChangeQuantityInput}></input>}
            </div>
            
        </div>
    );
};