import { RouterProvider } from 'react-router-dom';
import { routerDefault, routerUser} from './routes/router';
import Loading from './components/Loading';
import { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

const App = ()=> {
    const [user, setUser] = useState(null);
    
    useEffect(()=>{
        console.log(user);
    },[user]);

    return (
        <UserContext.Provider value={{user,setUser}}>
            <RouterProvider router={user !== null ? routerUser : routerDefault} fallbackElement={<Loading />}/>
        </UserContext.Provider>
    );
}

export {App, UserContext};