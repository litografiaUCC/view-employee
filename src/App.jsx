import { RouterProvider } from 'react-router-dom';
import { routerDefault, routerUser} from './routes/router';
import Loading from './components/Loading';
import { createContext, useEffect, useState } from 'react';
import { fetchUserData } from './utils/fetchs';

const UserContext = createContext();
const TokenContext = createContext();

const App = ()=> {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(()=>{
        if(token !== null) {
            fetch("http://192.168.1.6:9090/auth/userInfo",{
                headers: {
                    "Authorization": `Bearer ${token}` 
                }
            })
                .then((res)=>res.json())
                .then(({id})=>{
                    fetchUserData(id, setUser);
                    localStorage.setItem("token", token);
                })
                .catch(()=>{
                    setUser(null);
                    setToken(null);
                    localStorage.removeItem("token");
                });
        }
    },[token]);

    return (
        <TokenContext.Provider value={{token,setToken}}>
            <UserContext.Provider value={{user,setUser}}>
                <RouterProvider router={user !== null ? routerUser : routerDefault} fallbackElement={<Loading />}/>
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}

export {App, UserContext, TokenContext};