import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { UserContext } from "../../App";

export default function Login() {
    const defaultClass = "bg-white flex w-full p-4 text-md text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#3166B5] focus:border-[#3166B5] focus:outline-none";
    const focusClass = "bg-white flex w-full p-4 text-md text-gray-900 border rounded-lg ring-[#3166B5] border-[#3166B5] outline-none";
    const [classEmail, setClassEmail] = useState(defaultClass);
    const [classPassword, setClassPassword] = useState(defaultClass);
    const [formData,setFormData] = useState({
        email: "", 
        password: ""
    });

    const {user, setUser} = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const login = (event) => {
        setUser(formData);
    };

    return (
        <section className="bg-[#7BB7EE] w-screen h-screen flex justify-center items-center px-96 py-20">
            <div className="bg-white  flex flex-col items-center rounded-lg gap-5 min-w-[598px] max-w-[w-598] py-16">
                <img 
                    className="max-w-[285px]"
                    src={logo} 
                    alt="logo artes y planchas"
                />
                <h1 className="font-extrabold text-4xl">Login</h1>
                <form className="flex flex-col gap-3 w-full px-20" onSubmit={login} action="">
                    <div className={classEmail}>
                        <label htmlFor="email" className="flex rounded-full items-center justify-center text-xl w-[10%] h-full cursor-pointer">
                            <FontAwesomeIcon icon={faUserAlt} />
                        </label>
                        <input type="email" name="email" id="email" placeholder="Correo" className="border-none focus:border-none focus:outline-none w-[90%] h-full" 
                        onFocus={()=>{setClassEmail(focusClass)}} 
                        onBlur={()=>{setClassEmail(defaultClass)}} 
                        onChange={handleChange}/>
                    </div>
                    <div className={classPassword}>
                        <label htmlFor="password" className="flex rounded-full items-center justify-center text-xl w-[10%] h-full cursor-pointer">
                            <FontAwesomeIcon icon={faLock} />
                        </label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" className="border-none focus:border-none focus:outline-none w-[90%] h-full" 
                        onFocus={()=>{setClassPassword(focusClass)}} 
                        onBlur={()=>{setClassPassword(defaultClass)}}
                        onChange={handleChange}/>
                    </div>
                    <span className="text-md text-center">¿Olvido tu contraseña?</span>
                    <input type="submit" className="p-2 text-xl rounded-full bg-black text-white cursor-pointer" value="Ingresar" />
                </form>
            </div>
        </section>
    );
}