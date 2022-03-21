function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log("hola " + nombre);
        miCallback(nombre);
    }, 1000)
}

const adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log("adios " + nombre);
        otroCallback();
    }, 600)
}

console.log("iniciando proceso");

const conversacion = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        })
    }else{
        adios(nombre, callback);
    }
}

hola("carlos",(nombre)=>{
    conversacion(nombre, 3 , ()=>{
        console.log("terminando conversacion");
    })
})

const hablar = (callbackTalk) => {
    setTimeout(() => {
        console.log("bla bla bla");
        callbackTalk();
    }, 1000)
}