import * as express from "express";
import * as path from "path"
import { User, Product, Auth } from "./models/index";
import { updateProfile, getProfile } from "./controllers/users-controllers";
import { sequelize } from "./models/conection";
import { jwt } from "jsonwebtoken";
import * as cripto from "crypto"

const SECRET = "palabra-secreta"//esta es la palabra clave para desencriptar el token
const port = process.env.PORT || 3000;
const app = express()
const staticDirPath = path.resolve(__dirname, "../dist")

app.use( express.json({ limit: "50mb" }) ) 

function getSHA256ofString(text: string){// esta funcion "hashea" la contraseña
    return cripto
    .createHash('sha256')
    .update(text)
    .digest('hex')
}
 
// signup
//Registramos el usuario en la base de datos para que pueda acceder a todos los recursos
app.post("/auth",async (req, res) => {
    const {email,name,password,birthdate} = req.body

    const [user, created] = await User.findOrCreate({
        where: { email: req.body.email},                          
        defaults: {
            email,
            password,
            name,
            birthdate,
        }
    })

    const [auth, authCreated] = await Auth.findOrCreate({
        where: { user_id: user.get("id")},
        defaults: {
            email,
            password: getSHA256ofString(req.body.password),
            user_id: user.get("id")
        }
    })
    // console.log({auth, user});
    
    res.json({auth, user,})
})


//signin
//este endpoint tiene el fin de chequear si existe o no el usuario Y retornar un token q esconda la informacion de user para ser usado de nuevo
app.post("/auth/token", async(req,res) => {
    const {email, password} = req.body;
    const passwordHasheado = getSHA256ofString(password)//como la contraseña esta guardada "hasheada" debo buscarla de forma "hasheada"también

    const auth = await Auth.findOne({ where: {
        email,
        password: passwordHasheado
    } })

    const token = jwt.sign({ id: auth.get("user_id") }, SECRET)//el token que tiene esto esconde el "user_id" en este ej,
                                                               //y este es el texto q vamos a usar desp para invocar en otros endpoints 
                                                               //y lo desencriptaremos usaremos el mismo "SECRET"

    if (auth) {
        res.json({
            token,
        })
    } else {
        res.status(400).json({ error: "meail or password incorrect"})
    }
})


app.use(express.static(staticDirPath))

app.get("*", (req,res) => {
    res.sendFile(staticDirPath + "/index.html")
})//como incluir en el backend, el dist del codigo final

app.listen(port, ()=> {
    console.log("todo ok en el port:", port);
})

