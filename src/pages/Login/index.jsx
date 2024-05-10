import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { TokenContext } from "../../App";

export default function Login() {
    const defaultClass = "border-gray-400  bg-gray-50 focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none";
    const focusClass = "ring-[#3166B5] border-[#3166B5] outline-none";
    const alertClass = "ring-[#FF0000] border-[#FF0000] outline-none";
    const correctClass = "ring-[#3eff3b] border-[#3eff3b] outline-none";
    const [isAlertOpen,setIsAlertOpen] = useState(false);
    const [classEmail, setClassEmail] = useState(defaultClass);
    const [classPassword, setClassPassword] = useState(defaultClass);
    const [formData,setFormData] = useState({
        username: "", 
        password: ""
    });

    const {setToken} = useContext(TokenContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if(name === "username") {
            (value.includes("@")) ? setClassEmail(correctClass) : setClassEmail(alertClass);
        }else if(name === "password"){
            (value.length >= 8) ? setClassPassword(correctClass) : setClassPassword(alertClass);
        }
    };

    const login = (event) => {
        event.preventDefault();
        if(!(formData.username.includes("@")) && formData.password.length < 8){
            setIsAlertOpen(true);
            setTimeout(()=>setIsAlertOpen(false), 5000);
        }
        if(formData.username !== "" && formData.password !== "") {
            fetch("http://192.168.1.6:9090/auth/generateToken",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then((res)=>res.json())
                .then((res)=>setToken(res.token))
                .catch(()=>setIsAlertOpen(true));
            setTimeout(()=>setIsAlertOpen(false), 5000);
            return;
        }
    };

    return (
        <section className="bg-[#7BB7EE] w-screen h-screen flex justify-center items-center px-96 py-20">
            <div className="bg-white flex flex-col items-center rounded-lg gap-5 min-w-[598px] max-w-[w-598] py-24">
                <img 
                    className="max-w-[285px]"
                    src={logo} 
                    alt="logo artes y planchas"
                />
                {isAlertOpen && 
                    <div className="rounded bg-red-400 p-4 flex gap-3 text-white">
                        <FontAwesomeIcon className=" w-6 h-6" icon={faCircleExclamation}/>
                        Ups! Parece que algo salio mal!
                    </div>
                }
                <h1 className="font-extrabold text-4xl">Login</h1>
                <form className="flex flex-col gap-3 w-full px-20" onSubmit={login} action="">
                    <div className={"bg-white flex w-full p-4 text-md text-gray-900 border rounded-lg " + classEmail}>
                        <label htmlFor="username" className="flex rounded-full items-center justify-center text-xl w-[10%] h-full cursor-pointer">
                            <FontAwesomeIcon icon={faUserAlt} />
                        </label>
                        <input type="email" name="username" id="email" placeholder="Correo" className="border-none focus:border-none focus:outline-none w-[90%] h-full" 
                        onFocus={()=>{setClassEmail(focusClass)}} 
                        onBlur={()=>{setClassEmail(defaultClass)}} 
                        onChange={handleChange}/>
                    </div>
                    <i className="text-red-500 text-center">{classEmail.includes(alertClass) && "Ingresa un formato de correo valido"}</i>
                    <div className={"bg-white flex w-full p-4 text-md text-gray-900 border rounded-lg " + classPassword}>
                        <label htmlFor="password" className="flex rounded-full items-center justify-center text-xl w-[10%] h-full cursor-pointer">
                            <FontAwesomeIcon icon={faLock} />
                        </label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" className="border-none focus:border-none focus:outline-none w-[90%] h-full" 
                        minLength={8}
                        onFocus={()=>{setClassPassword(focusClass)}} 
                        onBlur={()=>{setClassPassword(defaultClass)}}
                        onChange={handleChange}/>
                    </div>
                    <i className="text-red-500 text-center">{classPassword.includes(alertClass) && "Recuerda que tu contraseña debe contener 8 caracteres"}</i>
                    <span className="text-md text-center">¿Olvido tu contraseña?</span>
                    <input type="submit" className="p-2 text-xl rounded-full bg-black text-white cursor-pointer" value="Ingresar" />
                </form>
            </div>
        </section>
    );
}