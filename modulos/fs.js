const fs = require("fs").promises;

const leer = async (ruta, cb) => {
    try{
        const data = await fs.readFile(ruta);
        return data.toString();
    }catch(e){
        console.error(e);
    }
}

const escribir = async (ruta, contenido) => {
    try{
        await fs.writeFile(ruta, contenido);
        return "Archivo escrito correctamente";
    }catch(e){
        console.error(e);
    }
}

const borrar = async (ruta) =>{
    try{
        await fs.unlink(ruta);
        return "Archivo elimninado correctamente";
    }catch (e){
        console.error(e);
    }
}

main = async ()=>{
    const read = await leer(__dirname+"/archivo.txt");
    //const write = await escribir(__dirname+"/hey.txt", "Hey este es un nuevo archivo");
    const del = await borrar(__dirname+"/hey.txt");
    console.log(del);
}

main()