import { useEffect, useState } from 'react';

function useFetchUser() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch("http://192.168.1.6:8082/api/v1/employee/1")
    .then((res)=>{
        if(res.ok) return res.json();
        if(res.status >= 400) throw new Error();
    }).then((res)=>{
        setUser(res);
    }).catch((e)=>{
      console.log(e);
    });
  },[]);
  

  return [user, setUser];
}

export default useFetchUser;