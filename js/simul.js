addEventListener('load', (event) => {});

onload = (event) => { 
    console.log("Documento cagado!!");
    // Enviar la peticion para conectarse al Back-Ends
    checkStatus();
};
const response = (res)=>{
    console.log(res.body);
}
const checkStatus = ()=>{
    const status = fetch('http://127.0.0.1:4269/video_feed', {
        method : "GET",
    }).then(response);
    return status
}