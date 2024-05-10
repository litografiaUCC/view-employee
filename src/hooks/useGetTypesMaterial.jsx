import { useState, useEffect } from "react";

function useGetTypesMaterial() {
    const [typesMaterial,setTypesMaterial] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:9090/api/v1/inventory/types")
        .then((res)=>res.ok? res.json() : [])
        .then((data)=>setTypesMaterial(data))
        .catch(e=>{
            setTypesMaterial([]);
        });
    },[]);

    return [typesMaterial, setTypesMaterial];
}

export default useGetTypesMaterial;