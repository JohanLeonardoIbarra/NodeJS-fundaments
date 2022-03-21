async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hola " + nombre);
            resolve(nombre);
        }, 1000)
    });
}

const adios = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("adios " + nombre);
            resolve();
        }, 600)
    })
}

const hablar = async (nombre) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("bla bla bla...");
            resolve();
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

async function main (){
    let nombre = await hola("johan");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

console.log("inicia el proceso");

main();

console.log("Termina el proceso");