import { useEffect, useState } from 'react';

function useFetchOrders() {
    const urlApproved = "http://192.168.1.6:9090/api/v1/orders/approved";
    const urlToApproved = "http://192.168.1.6:9090/api/v1/orders/toapprove";
    const [loading, setLoading] = useState(true);
    const [ordersApproved, setOrdersApproved] = useState([]);
    const [ordersToApproved, setOrdersToApproved] = useState([]);

    useEffect(()=>{
        // Fetch orders approved
        fetch(urlApproved)
        .then((res)=>{
            if(res.status == 204) return [];
            if(res.ok) return res.json();
            if(res.status >= 400) throw new Error();
        }).then((res)=>{
            setOrdersApproved(res);
            setLoading(false);
        }).catch((e)=>{console.log(e);});

        // Fetch orders to approved
        fetch(urlToApproved)
        .then((res)=>{
            if(res.status == 204) return [];
            if(res.ok) return res.json();
            if(res.status >= 400) throw new Error();
        }).then((res)=>{
            setOrdersToApproved(res);
            setLoading(false);
        }).catch((e)=>{console.log(e);});
    },[]);

    return [ordersApproved, ordersToApproved, loading, setOrdersApproved, setOrdersToApproved];
}

export default useFetchOrders;