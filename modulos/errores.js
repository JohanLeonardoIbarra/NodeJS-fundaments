const otraFuncion = ()=> {
    return seRompe();
}

const seRompe = () =>{
    return 3 + z;
}

const seRompeAsync = (cb) =>{
    setTimeout(()=>{
        try{
            return 3 + z;
        }catch(e){
            console.error("Error en mi funcion Async");
            cb(e)
        }
    })
}

try{
    seRompeAsync((e)=>{
        console.log(e);
    });
}catch(e){
    console.error("Algo se ha roto: "+ e);
}

console.log("Pero sigue funcionando");


