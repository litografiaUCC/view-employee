import { useState } from "react";
import cancelIcon from "../../assets/x_icon.svg";
import Modal from "../Modal";
import UserInfoItem from "./UserInfoItem";

export default function UserModal({user, handleModal}){
    const [isEdit, setIsEdit] = useState(false);

    const discardChanges = () => {
        setIsEdit(false);
    };
    const signOut = () => {
        console.log("Sign Out");
    };

    const handleIsEdit = ()=>{
        setIsEdit(!isEdit);
    };

    const itemsUserBasic = [
        {
            label: "nombre",
            data: user.name,
            isEditable: true
        },{
            label: "apellidos",
            data: user.name,
            isEditable: true
        },
    ];

    const itemsUserAdvance = [
        {
            label: "correo",
            data: user.name,
            isEditable: true
        },{
            label: "contraseña",
            data: "*".repeat(Math.random() * (12 - 8 + 1) + 8),
            isEditable: true
        },{
            label: "tipo documento",
            data: user.name,
            isEditable: false
        },{
            label: "numero documento",
            data: user.name,
            isEditable: false
        },{
            label: "rol",
            data: user.name,
            isEditable: false
        },{
            label: "Teléfono",
            data: user.name,
            isEditable: true
        }
    ];

    return(
    <Modal handleModal={handleModal}>
        <div 
            className="bg-white rounded-md flex max-w-5xl gap-5 p-3"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex flex-col w-1/3">
                <img 
                    src={user.img} 
                    alt="Imagen Usuario" 
                    className="w-full rounded-lg" 
                />
                {itemsUserBasic.map(({label, data, isEditable}) => 
                    <UserInfoItem label={label} data={data} isEdit={isEdit} isEditable={isEditable}/>
                )}
            </div>
            
            <div className="flex flex-col w-2/3">
                {itemsUserAdvance.map(({label, data, isEditable}) => 
                    <UserInfoItem label={label} data={data} isEdit={isEdit} isEditable={isEditable}/>
                )}
                <div className="flex gap-4 items-end justify-end min-h-[36px] mt-5">
                    <button className="bg-[#3166B5] hover:bg-[#34638e] text-white rounded h-[100%] pr-3 pl-3 text-xl font-normal flex items-center gap-1 capitalize max-w-[150px] text-wrap" onClick={handleIsEdit}>
                        {isEdit ? "guardar cambios": "editar datos"}
                    </button>
                    <button className="bg-[#f92424] hover:bg-[#953333] text-white rounded h-[100%] pr-3 pl-3 text-xl font-normal flex items-center gap-1 capitalize max-w-[150px] text-wrap" onClick={isEdit?discardChanges:signOut}>
                        {isEdit?"cancelar cambios":"cerrar sesion"}
                    </button>
                </div>
            </div>
            <div className="relative m-2">
                <div className="absolute top-0 right-0 bg-red-600 hover:bg-[#953333] p-1 w-[24px] h-[24px] rounded cursor-pointer" onClick={handleModal}>
                    <img src={cancelIcon} className="w-[100%]" alt="Close Modal" ></img>
                </div>
            </div>
        </div>
    </Modal>
    );
}