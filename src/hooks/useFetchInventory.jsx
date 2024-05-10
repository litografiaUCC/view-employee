import { useEffect, useState } from 'react';

function useFetchInventory(endpoint = "/", method = "GET", body = null) {
    const url = "http://192.168.1.6:9090/api/v1/inventory" + endpoint;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [isUpdated, setIsUpdated] = useState(false);

    const configRequest = {
        method, 
        headers: {
            "Content-Type": "application/json",
        }
    };

    if(body !== null) configRequest.body = JSON.stringify(body);

    useEffect(()=>{
        fetch(url, configRequest)
        .then((res)=>{
            if(res.ok) return res.json();
            if(res.status >= 400) throw new Error();
        }).then((res)=>{
            setData(res);
            setLoading(false);
        }).catch((e)=>{console.log(e);});
    },[isUpdated]);

    return [data, loading, setData, setIsUpdated];
}

export default useFetchInventory;