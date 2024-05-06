async function fetchInventory(endpoint = "/", method = "GET", body = null){
    const url = "http://192.168.1.6:9090/api/v1/inventory" + endpoint;
    const configRequest = {
        method, 
        headers: {
            "Content-Type": "application/json",
        }
    };
    if(body !== null) configRequest.body = JSON.stringify(body);

    await fetch(url, configRequest)
        .then((res)=>{
            if(res.ok) return res.json();
            if(res.status >= 400) throw new Error();
        }).then((res)=>{
            return(res);
        }).catch((e)=>{console.log(e);});
}

export default fetchInventory;