import material from'../../assets/paper.jpg';
import './MaterialCard.css';

export default function MaterialCard({addStockActive, quantity}){
    return(
        <div className="bg-[#BBD4E3] p-[10px] rounded-md max-w-[30%] flex flex-col gap-2">
            <img src={material} alt="Imagen Papel" className='rounded-md w-full'/>
            <h3 className="font-medium text-2xl capitalize">Papel croma</h3>
            <div 
                className='bg-[#4599E8]/[0.50] pl-5 pr-5 text-lg rounded-full w-type'
            >
                Tipo
            </div>
            <p className='text-sm'>Aut molestias, assumenda quam ipsam saepe eveniet quaerat architecto commodi dolores, laudantium voluptas quibusdam minus alias necessitatibus ipsum distinctio nemo qui porro.</p>
            <div className='self-end flex flex-col items-end'>
                <h5 className='font-medium text-lg'>
                    {!addStockActive && "Cantidad"}
                    {addStockActive && "Cantidad a agregar"}
                </h5>
                {!addStockActive && <p className='text-lg'>{quantity}</p>}
                {addStockActive && <input type='number' placeholder={quantity} className='text-lg w-[50%] text-center rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none'></input>}
            </div>
        </div>
    );
};