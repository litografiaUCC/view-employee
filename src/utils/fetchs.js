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

async function fetchUserData(id, setUser){
    const url = "http://192.168.1.6:9090/api/v1/employee/" + id;

    await fetch(url)
        .then((res)=>{
            if(res.ok) return res.json();
            if(res.status >= 400) throw new Error();
        }).then((res)=>{
            setUser(res);
        }).catch((e)=>{console.log(e);});
}

async function fetchDataToken(token){
    await fetch("http://192.168.1.6:9090/auth/userInfo",{
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    })
        .then((res)=>res.json())
        .then(async({id})=>{
            return await fetchUserData(id);
        })
        .catch((e)=>console.log(e));
}

export {fetchInventory, fetchUserData, fetchDataToken};