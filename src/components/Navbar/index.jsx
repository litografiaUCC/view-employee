import logo from '../../assets/logo.png';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from "../../utils/constants";

export default function Navbar({route}){
  const user = {
    img: "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg",
  };

  return (
    <div className='bg-[#7BB7EE] flex justify-around items-center mx-auto px-4 text-black'>
      {/* Logo */}
      <Link to="/">
        <img 
          className="max-w-[285px] cursor-pointer"
          src={logo} 
          alt="logo artes y planchas"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className='flex items-center'>
        {NAV_ITEMS?.map(item => (
          <li
            key={item.id}
            className={`link-nav-${(item.link === route) ? "active" : "inactive"} m-5 text-[24px] cursor-pointer hover:text-black `}
          >
            <Link to={item.link}>
                {item.text}
            </Link>
            <div className="line w-[100%] h-[6px] flex rounded-full drop-shadow-[0_6px_6px_rgba(0,0,0,0.30)]">
              <div class="blue bg-[#15B2EF] h-[6px]  rounded-l-full"></div>
              <div class="pink bg-[#E41797] h-[6px] "></div>
              <div class="yellow bg-[#F5EE19] h-[6px] "></div>
              <div class="black bg-[#000000] h-[6px]  rounded-r-full"></div>
            </div>
          </li>
        ))}
        <li className="m-5 cursor-pointer">
            <img 
                className="w-[80px] rounded-full"
                src={user.img} 
                alt="Foto Usuario"
            />
        </li>
      </ul>
    </div>
  );
}