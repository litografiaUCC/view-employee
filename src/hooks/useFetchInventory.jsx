import { useEffect, useState } from 'react';

function useFetchInventory(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(res.ok) return res.json();
            if(res.status >= 400) throw new Error();
        }).then((res)=>{
            setData(res);
            setLoading(false);
        }).catch((e)=>{console.log(e);});
    },[url]);
    

    return [data, loading, setData, setLoading];
}

export default useFetchInventory;