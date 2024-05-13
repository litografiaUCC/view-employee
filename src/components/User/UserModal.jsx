import { useContext, useState } from "react";
import cancelIcon from "../../assets/x_icon.svg";
import Modal from "../Modal";
import UserInfoItem from "./UserInfoItem";
import { TokenContext } from "../../App";
import "./UserModal.css";

export default function UserModal({
    user, 
    setUser, 
    isUpdatedUser,
    setIsUpdatedUser, 
    handleModal, 
    defaultImg
}){
    const [isEdit, setIsEdit] = useState(false);
    const {setToken} = useContext(TokenContext);
    const {id: userId} = user;
    const [formData, setFormData] = useState({id: userId});

    const discardChanges = () => {
        setFormData({id: userId});
        setIsEdit(false);
    };

    const signOut = () => {
        setUser(null);
        setToken(null);
        localStorage.clear();
    };

    const handleIsEdit = ()=>{
        setIsEdit(!isEdit);
    };
    
    const submitData = () => {
        fetch("http://localhost:9090/api/v1/employee/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res)=>res.json())
            .then((res)=>{
                if(res.status === 200) setIsUpdatedUser(!isUpdatedUser);
            })
            .catch((e)=>console.log(e));
        setIsEdit(false);
    };

    const changeFormData = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const itemsUserBasic = [
        {
            label: "nombre",
            name: "name",
            data: user.name,
            isEditable: true
        },{
            label: "apellidos",
            name: "lastname",
            data: user.lastname,
            isEditable: true
        },
    ];

    const itemsUserAdvance = [
        {
            label: "correo",
            name: "email",
            data: user.email,
            isEditable: true
        },{
            label: "contraseña",
            name: "password",
            data: "*".repeat(Math.random() * (12 - 8 + 1) + 8),
            isEditable: true,
            type: "password"
        },{
            label: "tipo documento",
            data: (user.typeDocument) ? user?.typeDocument?.name : "N/A",
            isEditable: false
        },{
            label: "numero documento",
            data: user.numberDocument,
            isEditable: false
        },{
            label: "rol",
            data: (user.rol) ? user?.rol : "N/A",
            isEditable: false
        },{
            label: "Teléfono",
            name: "phone",
            data: (user.phone) ? user.phone: "N/A",
            isEditable: true
        }
    ];

    return(
    <Modal handleModal={handleModal}>
        <div 
            className="bg-white rounded-md flex max-w-5xl gap-5 p-3 animation-modal"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex flex-col w-1/3">
                <img 
                    src={user.photo !== null ? user?.photo : defaultImg} 
                    alt="Imagen Usuario" 
                    className="w-full rounded-lg" 
                />
                {itemsUserBasic.map(({label, name, data, isEditable}) => {
                    return <UserInfoItem 
                        key={label} 
                        label={label}
                        name={name} 
                        data={data} 
                        isEdit={isEdit} 
                        isEditable={isEditable}
                        onChange={changeFormData}
                    />
                })}
            </div>
            
            <div className="flex flex-col w-2/3">
                {itemsUserAdvance.map(({label, name, data, isEditable, type}) => 
                    <UserInfoItem 
                        key={label} 
                        name={name}
                        label={label} 
                        data={data} 
                        isEdit={isEdit} 
                        isEditable={isEditable}
                        onChange={changeFormData}
                        type={type}
                    />
                )}
                <div className="flex gap-4 items-end justify-end min-h-[36px] mt-5">
                    <button 
                        className="bg-[#3166B5] hover:bg-[#34638e] text-white rounded h-[100%] pr-3 pl-3 text-xl font-normal flex items-center gap-1 capitalize max-w-[150px] text-wrap" 
                        onClick={isEdit ? submitData : handleIsEdit}
                    >
                        {isEdit ? "guardar cambios": "editar datos"}
                    </button>
                    <button 
                        className="bg-[#f92424] hover:bg-[#953333] text-white rounded h-[100%] pr-3 pl-3 text-xl font-normal flex items-center gap-1 capitalize max-w-[150px] text-wrap" 
                        onClick={isEdit ? discardChanges: signOut}
                    >
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