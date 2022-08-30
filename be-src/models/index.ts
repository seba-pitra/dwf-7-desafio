//en este archivo importaremos todos los modelos para hhacer las relaciones entre si
//y evitamos el problema de dependencia circular xq este archivo esta importando a los otoros dos 
//Este es elarchviso que usaremos para importar los modelos

import { User } from "./users";
import { Pet } from "./pets";
import { Auth } from "./auth"

User.hasMany(Pet)//definimos la relacion one to many entre User y Product
Pet.belongsTo(User)//aca definimos la relacion entre productos y usuarios

export { User, Pet, Auth } 