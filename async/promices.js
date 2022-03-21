function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hola " + nombre);
            resolve(nombre);
        }, 1000)
    });
}

const adios = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("adios " + nombre);
            resolve();
        }, 600)
    })
}

const hablar = (nombre) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("bla bla bla");
            reject("Hay un error");
        }, 1000)
    })
}

const conversacion = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}
//---

console.log("iniciando proceso ....");

hola("carlos")
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("terminado el proceso");
    }).catch(e => {
        console.error("Ha habido un error")
        console.error(e)
    })