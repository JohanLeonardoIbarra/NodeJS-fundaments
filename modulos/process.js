process.on("exit", () => {
    console.log("El proceso Termino");
})

process.on("beforeExit", () => {
    console.log("El proceso va a terminar");
})

process.on("uncaughtException", (err, origen)=>{
    console.error("vaya se nos a escapado un error");
    console.error(err);
})

funcion();

//process.on("uncaughtException")