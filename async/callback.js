function soyAsync(nombre, miCallback) {
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

soyAsync("johan", (nombre) => {
    adios(nombre, () => {
        console.log("terminando proceso");
    });
});
