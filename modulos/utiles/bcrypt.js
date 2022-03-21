import Bcrypt from "bcrypt";

const password = "1234Segura";

Bcrypt.hash(password, 5, (err, hash)=>{
    console.log(hash);

    const igual = Bcrypt.compare(password, hash, (err, res)=>{
        console.log(res);
    });
})