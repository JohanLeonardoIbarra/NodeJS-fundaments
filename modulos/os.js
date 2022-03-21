const os = require("os");

//console.log(os.freemem());

const SIZE = 1024;
const kb = (bytes) =>{
    return bytes/SIZE;
}

const mb = (bytes) =>{
    return kb(bytes)/SIZE;
}

const gb = (bytes) =>{
    return mb(bytes)/SIZE;
}


console.log(os.tmpdir());