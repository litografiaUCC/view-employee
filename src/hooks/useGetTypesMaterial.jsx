import { useState, useEffect } from "react";
import { HOST_API } from "../utils/constants";

function useGetTypesMaterial() {
    const [typesMaterial,setTypesMaterial] = useState([]);
    useEffect(()=>{
        fetch(`http://${HOST_API}:9090/api/v1/inventory/types`)
        .then((res)=>res.ok? res.json() : [])
        .then((data)=>setTypesMaterial(data))
        .catch(e=>{
            setTypesMaterial([]);
        });
    },[]);

    return [typesMaterial, setTypesMaterial];
}

export default useGetTypesMaterial;