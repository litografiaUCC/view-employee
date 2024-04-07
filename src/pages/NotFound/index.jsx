import Navbar from "../../components/Navbar";
import icon404 from "../../assets/404.png"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (<>
        <Navbar />
        <section className="flex flex-col justify-center items-center gap-2">
            <img src={icon404} alt="Icono no encontrado" className="w-[250px]"/>
            <p className="text-3xl text-center">Ups, parece que te perdiste...</p>
            <Link to="/" className="text-3xl text-[#7BB7EE] hover:underline">Inicio</Link>
        </section>
    </>)
};

export default NotFound;