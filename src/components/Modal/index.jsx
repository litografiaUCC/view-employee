export default function Modal({children, handleModal}){
    return (
        <div 
            className="fixed inset-0 flex items-center justify-center bg-[#0000009e] z-50" 
            onClick={handleModal}
        >
            {children}
        </div>
    );
}