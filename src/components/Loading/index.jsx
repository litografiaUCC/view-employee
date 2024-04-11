export default function Loading(){
    return(
        <div className="flex flex-col gap-2 justify-center items-center w-[100vw] h-[80vh] bg-white">
            <div
            className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-[#7BB7EE] border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
            </div>
            <p className="font text-[24px]">Cargando...</p>
        </div>
    );
}